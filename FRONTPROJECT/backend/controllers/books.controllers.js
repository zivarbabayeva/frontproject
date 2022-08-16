const Book = require('../model/book');
const book=require('../model/book')
const getAllBooks=async(req,res,next)=>{
    let books;
    try{
        books=await Book.find();
    } catch(error){
        console.log(error);
    }
    if(!books){
        return res.status(404).json({message:"No  books found....!"})
    }
    else{
        return res.status(200).json({books})
    }
}
const addBook=async(req,res,next)=>{
    const{name,author, description, privce, available}=req.body;
        let book;
        try{
book=new Book({
    name, 
    author,
    description,
    price,
    available
})
await book.save();
        }catch(error){
console.log(err);
        }
        if(!book){
            return res.status(500).json({message:"Unable to add...!"})
        }
        else{
            return res.status(200).json({books})
        }
    }


exports.getAllBooks=getAllBooks;
exports.addBook=addBook;