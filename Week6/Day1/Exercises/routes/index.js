const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Salam, this is my first route!');
});

module.exports = router;