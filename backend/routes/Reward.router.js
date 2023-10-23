const express = require("express");
const { RewardModel } = require("../models/Reward.model");

const RewardRouter = express.Router();



RewardRouter.get('/',async(req,res)=>{
  try{
      const rewards = await RewardModel.find();
      res.status(200).send(rewards)
  }catch(error){
      res.status(500).send("Internal Server Error")
  }
})


RewardRouter.post("/reward", async (req, res) => {
  try {
    const { Gift_url, Gift_name, Coin_Req } = req.body;
    const new_event = new RewardModel({
      Gift_url,
      Gift_name,
      Coin_Req,
    });

    await new_event.save();
    res.status(200).send("Data Inserted Sucessfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

RewardRouter.get("/getReward", async (req, res) => {
  const my_Reward = await RewardModel.find();
  res.send(my_Reward);
});


RewardRouter.patch('/update/:_id',async(req,res)=>{
  try{
    const { Gift_url, Gift_name, Coin_Req } = req.body;
      const {_id} = req.params
      await RewardModel.findOneAndUpdate({_id},{Gift_url, Gift_name, Coin_Req});
      res.status(200).send('Updated Sucessfully')
  }catch(error){
      console.log(error)
      res.status(500).send("Internal Server Error")
  }
})

RewardRouter.delete('/Delete/:_id',async(req,res)=>{
  try {
    const {_id} = req.params
    await RewardModel.findOneAndDelete({_id});
      res.status(200).send('Delete Sucessfully')
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error")
  }
})

module.exports = {
  RewardRouter,
};
