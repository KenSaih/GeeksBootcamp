import Post from "./models/Post.js";

export default class PostController {
  // GET /posts - Get all posts
  static async getAllPosts(req, res) {
    try {
      const posts = await Post.findAll();
      res.status(200).json({
        success: true,
        count: posts.length,
        data: posts,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching posts",
        error: error.message,
      });
    }
  }

  // GET /posts/:id - Get post by ID
  static async getPostById(req, res) {
    try {
      const { id } = req.params;

      // Validate ID
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid post ID",
        });
      }

      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post not found",
        });
      }

      res.status(200).json({
        success: true,
        data: post,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching post",
        error: error.message,
      });
    }
  }

  // POST /posts - Create new post
  static async createPost(req, res) {
    try {
      const { title, content } = req.body;

      // Validation
      if (!title || !content) {
        return res.status(400).json({
          success: false,
          message: "Title and content are required",
        });
      }

      if (title.trim().length === 0 || content.trim().length === 0) {
        return res.status(400).json({
          success: false,
          message: "Title and content cannot be empty",
        });
      }

      const newPost = await Post.create({
        title: title.trim(),
        content: content.trim(),
      });

      res.status(201).json({
        success: true,
        message: "Post created successfully",
        data: newPost,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error creating post",
        error: error.message,
      });
    }
  }

  // PUT /posts/:id - Update post
  static async updatePost(req, res) {
    try {
      const { id } = req.params;
      const { title, content } = req.body;

      // Validate ID
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid post ID",
        });
      }

      // Validation
      if (!title || !content) {
        return res.status(400).json({
          success: false,
          message: "Title and content are required",
        });
      }

      if (title.trim().length === 0 || content.trim().length === 0) {
        return res.status(400).json({
          success: false,
          message: "Title and content cannot be empty",
        });
      }

      const updatedPost = await Post.update(id, {
        title: title.trim(),
        content: content.trim(),
      });

      res.status(200).json({
        success: true,
        message: "Post updated successfully",
        data: updatedPost,
      });
    } catch (error) {
      if (error.message.includes("Post not found")) {
        return res.status(404).json({
          success: false,
          message: "Post not found",
        });
      }

      res.status(500).json({
        success: false,
        message: "Error updating post",
        error: error.message,
      });
    }
  }

  // DELETE /posts/:id - Delete post
  static async deletePost(req, res) {
    try {
      const { id } = req.params;

      // Validate ID
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid post ID",
        });
      }

      const deletedPost = await Post.delete(id);

      res.status(200).json({
        success: true,
        message: "Post deleted successfully",
        data: deletedPost,
      });
    } catch (error) {
      if (error.message.includes("Post not found")) {
        return res.status(404).json({
          success: false,
          message: "Post not found",
        });
      }

      res.status(500).json({
        success: false,
        message: "Error deleting post",
        error: error.message,
      });
    }
  }
}
