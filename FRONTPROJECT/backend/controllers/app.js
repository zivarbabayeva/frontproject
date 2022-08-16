const express=require('express')
const mongoose=require('mongoose')
//import express from 'express';
//import mongoose from 'mongoose';
const port=3001;
const router =require('./routes/book-routes') 

const app=express();
//Middleware
app.use('/books',router)//localhost:3001/books

//Ziva_0518702505// new parol
mongoose.connect("mongodb+srv://test:test@cluster0.yl12c.mongodb.net/testDB?retryWrites=true&w=majority")
.then(()=> console.log('Connected to DataBase...!'))
.then(()=>{
    app.listen(3001)
})
.catch((err)=>console.log(err))

