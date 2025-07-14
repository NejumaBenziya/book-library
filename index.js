const express=require("express")
const mongoose=require('mongoose')
const BookModel=require("./src/models/bookModel")
const  bookRouter=require("./src/routes/booksRouter")
const userRouter=require('./src/routers/userRouter')
const bodyParser = require('body-parser')
const UserModel=require('./src/models/userModel')
const app =express()
const PORT=3000
mongoose.connect('mongodb+srv://nejumabenziya:leen786@main.dha8ojg.mongodb.net/?retryWrites=true&w=majority&appName=main')
.then(res=>{
    console.log("mongodb connected");
    
})
.catch(err=>{
    console.log('connection error')
    console.log(err)
})
app.use(bodyParser.json())
app.use(bookRouter)
app.use("/user",userRouter)
app.listen(PORT,()=>{
    console.log(`server running on http://127.0.0.1:${PORT}`);
    
})