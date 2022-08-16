const express=require('express')
const router =express.Router();
const Book=require("../model/book")
const booksController=require("../controllers/books.controllers");

router.get('/',booksController.getAllBooks);
router.post('/add',booksController.addBook);
let books;
module.exports=router;