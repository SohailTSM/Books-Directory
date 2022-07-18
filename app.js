const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/book.js");

require("dotenv/config");

const app = express();

mongoose
  .connect(process.env.DB_CONNECTION, {
    dbName: "BooksDirectory",
    useNewUrlParser: true,
  })
  .then(
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    })
  )
  .catch((err) => console.log(err));
