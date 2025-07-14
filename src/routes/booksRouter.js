const express=require("express")
const router=express.Router()
const BookModel=require("../models/bookModel")

router.get("/",(req,res)=>{
    res.send("API is working")
})
router.get("/books",async(req,res)=>{
    const books=await BookModel.find()
    res.json(books)
})
router.post("/books",async(req,res)=>{
    console.log(req.body)
    const newBook={
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    }
console.log(newBook)
    const newBookDocument=new BookModel(newBook)
    await newBookDocument.save()
    res.send("book added")
})
router.delete('/books/:id',async(req,res)=>{
    console.log(req.params.id);
    
    await BookModel.findByIdAndDelete(req.params.id)
    res.send("book deleted")
})

module.exports=router
