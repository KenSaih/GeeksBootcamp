import db from '../config/db.js';
import bcrypt from 'bcrypt';

class User {
  constructor() {
    this.saltRounds = 10;
  }

  async hashPassword(password) {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }

  async register(userData) {
    const { email, username, first_name, last_name, password } = userData;
    
    const trx = await db.transaction();
    
    try {
      // Check if user already exists
      const existingUser = await trx('users')
        .where('email', email)
        .orWhere('username', username)
        .first();
      
      if (existingUser) {
        await trx.rollback();
        throw new Error('User with this email or username already exists');
      }

      // Hash password
      const hashedPassword = await this.hashPassword(password);

      // Insert user data
      const [userId] = await trx('users').insert({
        email,
        username,
        first_name,
        last_name
      }).returning('id');

      // Insert hashed password
      await trx('hashpwd').insert({
        username,
        password: hashedPassword
      });

      await trx.commit();

      // Return user without password
      const newUser = await this.getUserById(userId.id || userId);
      return newUser;
    } catch (error) {
      await trx.rollback();
      throw error;
    }
  }

  async login(username, password) {
    try {
      // Get user data
      const user = await db('users').where('username', username).first();
      if (!user) {
        throw new Error('User not found');
      }

      // Get hashed password
      const hashData = await db('hashpwd').where('username', username).first();
      if (!hashData) {
        throw new Error('Authentication data not found');
      }

      // Compare passwords
      const isValidPassword = await this.comparePassword(password, hashData.password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }

      // Return user without password
      return {
        id: user.id,
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const users = await db('users').select('id', 'email', 'username', 'first_name', 'last_name');
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const user = await db('users')
        .where('id', id)
        .select('id', 'email', 'username', 'first_name', 'last_name')
        .first();
      
      if (!user) {
        throw new Error('User not found');
      }
      
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id, updateData) {
    try {
      const { email, username, first_name, last_name } = updateData;
      
      // Check if user exists
      const existingUser = await this.getUserById(id);
      if (!existingUser) {
        throw new Error('User not found');
      }

      // Check for duplicate email or username (excluding current user)
      if (email || username) {
        const duplicateCheck = await db('users')
          .where(function() {
            if (email) this.where('email', email);
            if (username) this.orWhere('username', username);
          })
          .andWhere('id', '!=', id)
          .first();

        if (duplicateCheck) {
          throw new Error('Email or username already exists');
        }
      }

      // Update user data
      await db('users').where('id', id).update({
        ...(email && { email }),
        ...(username && { username }),
        ...(first_name && { first_name }),
        ...(last_name && { last_name }),
        updated_at: new Date()
      });

      // If username is updated, update it in hashpwd table too
      if (username) {
        await db('hashpwd').where('username', existingUser.username).update({
          username,
          updated_at: new Date()
        });
      }

      // Return updated user
      const updatedUser = await this.getUserById(id);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
}

export default User;