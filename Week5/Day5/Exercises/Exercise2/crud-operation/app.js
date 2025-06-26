const express = require('express');
const { fetchPosts } = require('../../Exercise3/crud.api/data/dataService');

const app = express();
app.use(express.json());

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Data fetched from JSONPlaceholder');
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(5000, () => console.log('CRUD API running on http://localhost:5000'));
