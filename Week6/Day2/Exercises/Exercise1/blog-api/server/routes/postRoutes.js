import express from "express";
import PostController from "../controllers/postController.js";

const postRoutes = express.Router();

// GET /posts - Get all posts
postRoutes.get("/", PostController.getAllPosts);

// GET /posts/:id - Get post by ID
postRoutes.get("/:id", PostController.getPostById);

// POST /posts - Create new post
postRoutes.post("/", PostController.createPost);

// PUT /posts/:id - Update post
postRoutes.put("/:id", PostController.updatePost);

// DELETE /posts/:id - Delete post
postRoutes.delete("/:id", PostController.deletePost);

export default postRoutes;