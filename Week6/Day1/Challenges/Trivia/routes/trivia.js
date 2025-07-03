// routes/quiz.js
const express = require('express');
const router = express.Router();

// Sample questions
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// GET /quiz - Start the quiz or continue
router.get('/', (req, res) => {
  if (!req.session.currentQuestionIndex) {
    req.session.currentQuestionIndex = 0;
    req.session.score = 0;
  }

  const index = req.session.currentQuestionIndex;

  if (index >= triviaQuestions.length) {
    return res.json({ message: "Quiz finished. Go to /quiz/score to see your score." });
  }

  res.json({
    question: triviaQuestions[index].question,
    index: index + 1
  });
});

// POST /quiz - Submit an answer
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const index = req.session.currentQuestionIndex;

  if (index >= triviaQuestions.length) {
    return res.json({ message: "Quiz already completed." });
  }

  const correctAnswer = triviaQuestions[index].answer;

  let feedback;
  if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    req.session.score++;
    feedback = "✅ Correct!";
  } else {
    feedback = `❌ Incorrect. The correct answer was: ${correctAnswer}`;
  }

  req.session.currentQuestionIndex++;

  if (req.session.currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      feedback,
      message: "Quiz completed. Go to /quiz/score to see your result."
    });
  }

  res.json({
    feedback,
    nextQuestion: triviaQuestions[req.session.currentQuestionIndex].question
  });
});

// GET /quiz/score - Show final score
router.get('/score', (req, res) => {
  const score = req.session.score || 0;
  const total = triviaQuestions.length;

  // Reset quiz session
  req.session.destroy();

  res.json({
    message: `🎉 You scored ${score} out of ${total}!`
  });
});

module.exports = router;
