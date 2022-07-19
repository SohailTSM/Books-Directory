const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'Unknown',
  },
  genre: {
    type: String,
    default: 'Unknown',
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);
