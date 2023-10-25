const express = require("express");
const { UserModel } = require("../models/User.model");

const UserRouter = express.Router();

UserRouter.get("/:uid",async(req,res)=>{
      try{
        const {uid} = req.params;
        const user = await UserModel.find({uid})
        res.status(200).json(user);
      }
      catch(error){
        console.log(error)
        res.status(500).send("Internal Server Error")
      }
})

UserRouter.post("/addUser",async(req,res)=>{
    try{
       const {username,email,password,uid,number,profilePic} = req.body;
       const new_user = await new UserModel({
        username,
        email,
        password,
        uid,
        number,
        profilePic,
        referalCode:referralCodeGenerator.alpha('lowercase', 12)
       })
        
       await new_user.save();
       res.status(200).send({msg:"User Added Successfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})


module.exports = {
    UserRouter
}