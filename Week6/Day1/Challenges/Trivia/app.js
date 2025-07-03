const express = require('express');
const session = require('express-session'); // For tracking user's progress
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Middleware to manage user sessions
app.use(session({
  secret: 'quiz-secret',
  resave: false,
  saveUninitialized: true
}));

// Mount router
const quizRouter = require('./routes/quiz');
app.use('/quiz', quizRouter);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Trivia Quiz running on http://localhost:${port}`);
});
