const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/bookModel.js');
const booksRoutes = require('./routes/booksRoutes.js');

require('dotenv/config');

const app = express();

// DB Connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    dbName: 'BooksDirectory',
    useNewUrlParser: true,
  })
  .then(
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    })
  )
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Route Middlewares
app.use('/books', booksRoutes);

// Routes
app.get('/', (req, res) => {
  res.redirect('/books');
});


app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
