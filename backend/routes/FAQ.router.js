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


  FAQrouter.get("/",async(req,res)=>{
    const my_Reward = await FAQModel.find();
    res.send(my_Reward);
  })


  FAQrouter.patch('/update/:_id',async(req,res)=>{
    try{
        const {
            Que,
            Ans
        } = req.body;
        const {_id} = req.params
        await FAQModel.findOneAndUpdate({_id},{Que,Ans});
        res.status(200).send('Updated Sucessfully')
    }catch(error){
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
  })
  
  FAQrouter.delete('/Delete/:_id',async(req,res)=>{
    try {
      const {_id} = req.params
      await FAQModel.findOneAndDelete({_id});
        res.status(200).send('Delete Sucessfully')
    } catch (error) {
      console.log(error)
      res.status(500).send("Internal Server Error")
    }
  })
  



  
  module.exports = {
      FAQrouter
  }