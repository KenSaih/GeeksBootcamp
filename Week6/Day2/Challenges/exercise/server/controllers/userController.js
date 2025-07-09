import User from '../models/User.js';

const userModel = new User();

export const register = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;

    // Validate required fields
    if (!email || !username || !first_name || !last_name || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: email, username, first_name, last_name, password'
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long'
      });
    }

    const newUser = await userModel.register({ email, username, first_name, last_name, password });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: newUser
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate required fields
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required'
      });
    }

    const user = await userModel.login(username, password);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: user
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();

    res.status(200).json({
      success: true,
      message: 'Users retrieved successfully',
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Valid user ID is required'
      });
    }

    const user = await userModel.getUserById(parseInt(id));

    res.status(200).json({
      success: true,
      message: 'User retrieved successfully',
      data: user
    });
  } catch (error) {
    const statusCode = error.message === 'User not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Valid user ID is required'
      });
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'At least one field is required to update'
      });
    }

    const updatedUser = await userModel.updateUser(parseInt(id), updateData);

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: updatedUser
    });
  } catch (error) {
    const statusCode = error.message === 'User not found' ? 404 : 400;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};