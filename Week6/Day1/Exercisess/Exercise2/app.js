// Before: const express = require('express');
import express from 'express';
// Before: const { app, todos, nextId } = require('./app'); // (No longer needed to import from app.js)

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple in-memory "database" for demonstration
const todos = [];
let nextId = 1;

// We'll manage 'todos' and 'nextId' directly in the router or pass them.
// For now, let's keep them here in app.js as global to this module
// and pass them to the router.

// Import our todo router (note the .js extension for local files)
import todoRouter from './routes/todo.js'; // IMPORTANT: Add .js extension

// Use the todo router for all requests starting with '/todos'
// We will pass the shared data (todos, nextId) to the router
app.use('/todos', todoRouter({ todos, nextId })); // Pass data to the router's setup

// Basic home route
app.get('/', (req, res) => {
    res.send('Welcome to the To-Do List API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access the API at http://localhost:${PORT}/todos`);
});
