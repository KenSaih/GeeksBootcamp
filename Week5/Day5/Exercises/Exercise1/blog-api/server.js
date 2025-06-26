const express = require('express');
const app = express();
app.use(express.json());

let posts = [
  { id: 1, title: 'First Post', content: 'Hello World!' },
  { id: 2, title: 'Second Post', content: 'Another entry.' }
];

// GET all posts
app.get('/posts', (req, res) => res.json(posts));

// GET post by id
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  post ? res.json(post) : res.status(404).send('Post not found');
});

// POST new post
app.post('/posts', (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT update post
app.put('/posts/:id', (req, res) => {
  const index = posts.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    posts[index] = { id: +req.params.id, ...req.body };
    res.json(posts[index]);
  } else {
    res.status(404).send('Post not found');
  }
});

// DELETE post
app.delete('/posts/:id', (req, res) => {
  const index = posts.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    const deleted = posts.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).send('Post not found');
  }
});

// Error handling
app.use((req, res) => res.status(404).send('Route not found'));

app.listen(3000, () => console.log('Blog API running on http://localhost:3000'));