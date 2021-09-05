const mongoose = require("mongoose");

title, author, pages, publisher, published_at;

const book = mongoose.model("Book", {
  title: String,
  author: String,
  pages: Number,
  publisher: String,
  published_at: String,
});

module.exports(book);
