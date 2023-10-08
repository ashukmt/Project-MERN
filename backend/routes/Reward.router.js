const express = require("express");
const { RewardModel } = require("../models/Reward.model");


const RewardRouter = express.Router();

RewardRouter.post("/reward", async(req, res) => {
    const {
        Gift_url,
        Gift_name,
        Coin_Req
    } = req.body;
  
    const new_event = await new RewardModel({
        Gift_url,
        Gift_name,
        Coin_Req
    })
  
    new_event.save();
    res.send({msg:"Reward added successfully"});
  });



  RewardRouter.get("/getReward",async(req,res)=>{
    const my_Reward = await RewardModel.find();
    res.send(my_Reward);
  })
  
  module.exports = {
      RewardRouter
  }