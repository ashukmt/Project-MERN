const express = require("express");
const { FAQModel } = require("../models/FAQ.model");


const FAQrouter = express.Router();

FAQrouter.post("/faq", async(req, res) => {
    try {
        const {
            Que,
            Ans
        } = req.body;
      
        const new_event = new FAQModel({
            Que,
            Ans
        })
       await new_event.save();
        res.status(200).send("data inserted sucessfully")
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
 
  });



  FAQrouter.get("/getFaq",async(req,res)=>{
    const my_Reward = await FAQModel.find();
    res.send(my_Reward);
  })
  
  module.exports = {
      FAQrouter
  }