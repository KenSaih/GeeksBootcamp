import express from "express";
import BookController from "../controllers/bookController.js";

const bookRoutes = express.Router();

// GET /books - Get all books
bookRoutes.get("/", BookController.getAllBooks);

// GET /books/:id - Get book by ID
bookRoutes.get("/:id", BookController.getBooksById);

// POST /books - Create new book
bookRoutes.post("/", BookController.createBook);


export default bookRoutes;