const express = require("express");
const { FAQModel } = require("../models/FAQ.model");


const FAQrouter = express.Router();

FAQrouter.post("/faq", async(req, res) => {
    const {
        Que,
        Ans
    } = req.body;
  
    const new_event = await new FAQModel({
        Que,
        Ans
    })
  
    new_event.save();
    res.send({msg:"Reward added successfully"});
  });



  FAQrouter.get("/getFaq",async(req,res)=>{
    const my_Reward = await FAQModel.find();
    res.send(my_Reward);
  })
  
  module.exports = {
      FAQrouter
  }