// Before: const express = require('express');
import express from 'express';

// We will receive todos and nextId as arguments when the router is initialized
// Before: const { todos, nextId } = require('../app');
// Function to create and return the router
const createTodoRouter = ({ todos, nextId }) => {
    const router = express.Router(); // Create a new router instance

    // Helper function to find a todo by ID
    const findTodoById = (id) => todos.find(todo => todo.id === parseInt(id));

    // GET all todos
    router.get('/', (req, res) => {
        res.json(todos);
    });

    // GET a single todo by ID
    router.get('/:id', (req, res) => {
        const todo = findTodoById(req.params.id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    });

    // POST a new todo
    router.post('/', (req, res) => {
        const { title, completed = false } = req.body;
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        const newTodo = {
            id: nextId++, // Mutate nextId directly here
            title,
            completed
        };
        todos.push(newTodo);
        res.status(201).json(newTodo);
    });

    // PUT (update) an existing todo by ID
    router.put('/:id', (req, res) => {
        const todo = findTodoById(req.params.id);
        if (todo) {
            const { title, completed } = req.body;
            if (title !== undefined) {
                todo.title = title;
            }
            if (completed !== undefined) {
                todo.completed = completed;
            }
            res.json(todo);
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    });

    // DELETE a todo by ID
    router.delete('/:id', (req, res) => {
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));
        if (todoIndex !== -1) {
            const deletedTodo = todos.splice(todoIndex, 1);
            res.json({ message: 'Todo deleted successfully', todo: deletedTodo[0] });
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    });

    return router; // Return the router instance
};

// Before: module.exports = router;
export default createTodoRouter; // Export the function that creates the router