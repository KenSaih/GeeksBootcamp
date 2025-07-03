import express from 'express';
import indexRouter from './routes/index.js';

const app = express();

app.use(indexRouter);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));