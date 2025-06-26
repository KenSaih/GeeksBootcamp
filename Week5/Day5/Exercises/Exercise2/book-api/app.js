const express = require('express');
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: 'Atomic habbit', author: 'James Clear', publishedYear: 1949 },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: 1988 }
];

app.get('/api/books', (req, res) => res.json(books));

app.get('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id == req.params.bookId);
  book ? res.status(200).json(book) : res.status(404).send('Book not found');
});

app.post('/api/books', (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(5000, () => console.log('Book API running on http://localhost:5000'));