const express = require("express");
const { RewardModel } = require("../models/Reward.model");

const RewardRouter = express.Router();

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

module.exports = {
  RewardRouter,
};
