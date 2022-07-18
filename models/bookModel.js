const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    default: ['Unknown'],
  },
  genres: {
    type: Array,
    default: ['Unknown'],
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);
