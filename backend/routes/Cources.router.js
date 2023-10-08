const express=require("express");
const courseRouter=express.Router();
const {CourcesModel} = require("../models/Course.model");
const ADMIN_TOKEN_PASSWORD=process.env.ADMIN_TOKEN_PASSWORD;
const{AdminModel}=require("../models/Admin.model")
var jwt = require('jsonwebtoken');
courseRouter.get("/cources",async(req,res)=>{
    try {
        const model = await CourcesModel.find({});
        res.send({msg:"Sucessfull",data:model})
    } catch (error) {
        res.send({msg:"error"});
    }
})

courseRouter.post("/post",async(req,res)=>{
    const{token}=req.header.split("")[1];
    const{courseSubheadder,courseName,course,des1,des2,des3}=req.body;
    try {
        jwt.verify(token, ADMIN_TOKEN_PASSWORD, async function(err, decoded) {
            if(!err){
                const model=await AdminModel.find({userName:decoded});
                if(model){
                    if(typeof course=="string" && typeof courseName=="string" && typeof courseSubheadder=="string" && typeof des1=="string" && typeof des2=="string" && typeof des3=="string"){
                        const model = await CourcesModel({
                            course:course,
                            courseName:courseName,
                            courseSubheadder:courseSubheadder,
                            des1:des1,
                            des2:des2,
                            des3:des3
                        });
                        await model.save();
                        res.send({msg:"Sucessful"})
                    }else{
                        res.send({msg:"Provide proper structure"});
                    }
                }else{
                    res.send({msg:"Not authenticated"});
                }
            }else{
                res.send({msg:"error"});
            }
          });
    } catch (error) {
        res.send({msg:"error"});
    }
})

module.exports={
    courseRouter
}