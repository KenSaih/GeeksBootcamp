import Book from "../models/Book.js";

export default class BookController {
  // GET /books - Get all books
  static async getAllBooks(req, res) {
    try {
      const books = await Book.findAll();
      res.status(200).json({
        success: true,
        count: books.length,
        data: books,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching books",
        error: error.message,
      });
    }
  }

  // GET /books/:id - Get book by ID
  static async getBooksById(req, res) {
    try {
      const { id } = req.params;

      // Validate ID
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid Book ID",
        });
      }

      const book = await Book.findById(id);

      if (! book ) {
        return res.status(404).json({
          success: false,
          message: "Book not found",
        });
      }

      res.status(200).json({
        success: true,
        data:  book ,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching book ",
        error: error.message,
      });
    }
  }

  // POST /books - Create new book
  static async createBook(req, res) {
    try {
      const { title, author, published_year } = req.body;

      // Validation
      if (!title || !author || !published_year) {
        return res.status(400).json({
          success: false,
          message: "Title and author and published_year are required",
        });
      }

      if (title.trim().length === 0 || author.trim().length === 0 || published_year.trim().length === 0) {
        return res.status(400).json({
          success: false,
          message: "Title and author and published_yea cannot be empty",
        });
      }

      const newBook = await Book.create({
        title: title.trim(),
        author: author.trim(),
        published_year:published_year
      });

      res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: newBook,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error creating book",
        error: error.message,
      });
    }
  }

}
