const express = require("express");
const { ShareLinkModel } = require("../models/ShareLink.model");



const ShareLinkrouter = express.Router();

ShareLinkrouter.post("/sharereferal", async(req, res) => {
    const {
        F_name,
        Email,
        Ph_number,
        R_Code
    } = req.body;

    const IfPresent = await ShareLinkModel.find({
        $or: [{ Email: Email }, { Ph_number: Ph_number }]
      }).exec();
      
      if (IfPresent.length > 0) {
        return res.status(409).send("Data is already present in the database");
      }
    else{
        try {
            const new_event = new ShareLinkModel({
                F_name,
                Email,
                Ph_number,
                R_Code
            })
            await new_event.save();
            res.status(200).send("Inserted Sucessfully")

        } catch (error) {
            console.log(error)
            res.status(500).send("Internal Server Error")
        }        
    }
   
  });



  ShareLinkrouter.get("/getsharereferal",async(req,res)=>{
    const my_Reward = await ShareLinkModel.find();
    res.send(my_Reward);
  })
  
  module.exports = {
      ShareLinkrouter
  }