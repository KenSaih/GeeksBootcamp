import pool from '../config/db.js';

export default class Post {
  // Get all posts
  static async findAll() {
    try {
        // Fetch all posts ordered by creation date
      const result = await pool.query('SELECT * FROM posts');
      // Return the rows from the result
      return result.rows;
      // If no posts found, return an empty array
    } catch (error) {
      throw new Error(`Error fetching posts: ${error.message}`);
    }
  }

  // Get post by ID
  static async findById(id) {
    try {
      // Validate ID
      const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
      return result.rows[0];
      // If post not found, return null
      
    } catch (error) {
      throw new Error(`Error fetching post: ${error.message}`);
    }
  }

  // Create new post
  static async create(postData) {
    const { title, content } = postData;
    
    if (!title || !content) {
        // Validate that title and content are provided
      throw new Error('Title and content are required');
    }

    try {
        // Insert new post into the database
      const result = await pool.query(
        'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
        [title, content]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating post: ${error.message}`);
    }
  }

  // Update post
  static async update(id, postData) {
    // Validate that ID and postData are provided
    const { title, content } = postData;
    //
    if (!title || !content) {
      throw new Error('Title and content are required');
    }

    try {
        // Check if post exist
      const result = await pool.query(
        'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
        [title, content, id]
      );
      
      if (result.rows.length === 0) {
        throw new Error('Post not found');
      }
      // Return the updated post
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating post: ${error.message}`);
    }
  }

  // Delete post
  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
      
      if (result.rows.length === 0) {
        throw new Error('Post not found');
      }
      
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting post: ${error.message}`);
    }
  }

  // Check if post exists
  static async exists(id) {
    try {
      const result = await pool.query('SELECT id FROM posts WHERE id = $1', [id]);
      return result.rows.length > 0;
    } catch (error) {
      throw new Error(`Error checking post existence: ${error.message}`);
    }
  }
}
