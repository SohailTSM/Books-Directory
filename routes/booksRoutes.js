const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel.js');

router.get('/', (req, res) => {
  res.render('index', { title: 'Books' });
});
router.get('/create', (req, res) => {
  res.render('create', { title: 'Create Book' });
});

// Export
module.exports = router;
