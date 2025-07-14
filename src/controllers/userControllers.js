const UserModel=require('../models/userModel')
var jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const saltRounds=10

const secretKey="confidential key"
const registerController=(req,res)=>{
    const data=req.body
    bcrypt.hash(req.body.password,saltRounds,function (err,hash) {
    if(hash){
        data.password=hash
         const newUser=new UserModel(data)
    newUser.save()
console.log("Register working");
res.send("Registered successfully")
    }
})
   

}
const loginController= async (req,res) =>{
const data=req.body

const user=await UserModel.findOne({email:data.email})
bcrypt.compare(req.body.password,user.password,function(err,result){
    if(err){
       res.status(401).send("Invalid credentials")
       
    }
    else if(result){
var token=jwt.sign({email:data.email},secretKey)
    res.send({message:"Logedin Successfully "})
    }else{
    res.status(401).send("Invalid credentials")
}
})

}
module.exports={registerController,loginController}