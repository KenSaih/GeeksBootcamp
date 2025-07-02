const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from books!');
});


router.get('/list', (req, res) => {
  // This would normally fetch a list of books from a database
  res.json([
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
  ]);
});

router.get('/:id', (req, res) => {
  // This would normally fetch a single book from a database
  const book = books.find(book => book.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});
router.post('/', (req, res) => {
  // This would normally add a new book to a database
  const newBook = {
    id: Date.now(), // Simple ID generation
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.status(201).json(newBook);
}); 

router.put('/:id', (req, res) => {
  // This would normally update a book in a database
  const book = books.find(book => book.id === parseInt(req.params.id));
  if (book) {
    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

router.delete('/:id', (req, res) => {
  // This would normally delete a book from a database
  const bookIndex = books.findIndex(book => book.id === parseInt(req.params.id));
  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);
    res.json({ message: 'Book deleted successfully', book: deletedBook[0] });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});


module.exports = router;