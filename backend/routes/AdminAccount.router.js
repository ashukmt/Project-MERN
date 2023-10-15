const express=require("express");
const adminAccountRouter=express.Router();
var jwt = require('jsonwebtoken');

const ADMIN_TOKEN_PASSWORD=process.env.ADMIN_TOKEN_PASSWORD;
const {AdminModel}=require("../models/Admin.model");
adminAccountRouter.post("/login",async(req,res)=>{
    const{userName,password}=req.body;
    try {
        const model=await AdminModel.find({userName,password});
        if(model){
            var token = jwt.sign({ token: userName }, ADMIN_TOKEN_PASSWORD);
            res.send({msg:"Sucessful",token:token});

        }else{
            res.send({msg:"Not a admin"})
        }
    } catch (error) {
        res.send({msg:"error"})
    }
})


module.exports={
    adminAccountRouter
}