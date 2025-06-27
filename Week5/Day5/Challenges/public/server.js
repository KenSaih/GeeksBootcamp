const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { emojis } = require('../data/emojis');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let score = 0;

app.get('/emoji', (req, res) => {
  const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [correctEmoji.name];

  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.includes(random.name)) {
      options.push(random.name);
    }
  }

  // Mélanger les options
  options.sort(() => 0.5 - Math.random());

  res.json({ emoji: correctEmoji.emoji, correctAnswer: correctEmoji.name, options });
});

app.post('/guess', (req, res) => {
  const { guess, correctAnswer } = req.body;
  const isCorrect = guess === correctAnswer;
  if (isCorrect) score++;

  res.json({ isCorrect, score });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));