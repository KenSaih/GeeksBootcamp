import pool from "../config/db.js";

export default class Book {
  // Get all posts
  static async findAll() {
    try {
      // Fetch all posts ordered by creation date
      const result = await pool.query("SELECT * FROM books");
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
      const result = await pool.query("SELECT * FROM books WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
      // If book not found, return null
    } catch (error) {
      throw new Error(`Error fetching book: ${error.message}`);
    }
  }

  // Create new book
  static async create(bookData) {
    const { title, author, published_year } = bookData;

    if (!title || !author || !published_year) {
      throw new Error("Title and author and published_year are required");
    }

    try {
      // Insert new book into the database
      const result = await pool.query(
        "INSERT INTO books (title, author,published_year) VALUES ($1, $2,$3) RETURNING *",
        [title, author, published_year]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating book: ${error.message}`);
    }
  }

  // Check if book exists
}
