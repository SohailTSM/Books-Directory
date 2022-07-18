const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel.js');

router.get('/', (req, res) => {
  Book.find()
    .then((result) => {
      res.render('index', { title: 'Books', books: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get('/create', (req, res) => {
  res.render('create', { title: 'Create Book' });
});

// Export
module.exports = router;
