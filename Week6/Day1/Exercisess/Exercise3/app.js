import express from 'express';
import booksRouter from './routes/books.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Books API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access the API at http://localhost:${PORT}/books`);
});