const express = require("express");

const {
  addBook,
  gitAllBook,
  gitById,
  deleteById,
} = require("../controlles/book");

const bookRouter = express.Router();

bookRouter.post("/book",addBook)
bookRouter.get("/book",gitAllBook)
bookRouter.get("/book/:book_id",gitById)
bookRouter.delete("/book/:book_id",deleteById);




module.exports(bookRouter)