const express=require("express")
const mongoose=require('mongoose')
const bookSchema=new mongoose.Schema({
    title:String,
    author:String,
    year:Number
})
const BookModel=mongoose.model("book",bookSchema)
module.exports=BookModel