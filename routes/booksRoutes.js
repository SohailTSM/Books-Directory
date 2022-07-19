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

router.post('/', (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then((result) => res.redirect('/books'))
    .catch((err) => console.log(err));
});

router.get('/create', (req, res) => {
  res.render('create', { title: 'Create Book' });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Book.findById(id)
    .then((result) => {
      res.render('details', { title: 'Book Detail', book: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).render('404', { title: '404' });
    });
});

// Export
module.exports = router;
