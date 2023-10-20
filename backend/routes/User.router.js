const { UserModel } = require("../models/User.model");
const passport = require("passport")
const cookieSession = require("cookie-session")
const express = require('express')

const UserRouter = express.Router();

UserRouter.get('/',async(req,res)=>{
    try{
        const users = await UserModel.find();
        res.status(200).send(users)
    }catch(error){
        res.status(500).send("Internal Server Error")
    }
})

UserRouter.post('/addUser',async(req,res)=>{
    try{
        
        res.status(200).send("User added")
    }catch(error){
        res.status(500).send("Internal Server Error")
    }
})

module.exports = {
  UserRouter,
};