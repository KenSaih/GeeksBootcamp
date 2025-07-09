
// ================================
// routes/userRoutes.js
// ================================
import express from 'express';
import { register, login, getUsers, getUserById, updateUser } from '../controllers/userController.js';

const router = express.Router();

// POST /register - Register a new user
router.post('/register', register);

// POST /login - Login user
router.post('/login', login);

// GET /users - Get all users
router.get('/users', getUsers);

// GET /users/:id - Get user by ID
router.get('/users/:id', getUserById);

// PUT /users/:id - Update user by ID
router.put('/users/:id', updateUser);

export default router;