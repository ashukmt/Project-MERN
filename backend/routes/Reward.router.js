const express = require("express");
const { RewardModel } = require("../models/Reward.model");


const RewardRouter = express.Router();

RewardRouter.post("/reward", async(req, res) => {
    const {
        Gift_url,
        Gift_name,
        Coin_Req
    } = req.body;
  
    // const new_event = await new RewardModel({
    //     Gift_url,
    //     Gift_name,
    //     Coin_Req
    // })

    RewardModel.insertMany(
        [
            {
              "Que":"Who Can i Refer?",
              "Ans":"Anyone who meets the eligibility criteria for our courses can be referred. Eligibility:Up to 28 years of age Graduate (Any Stream) Should know the basics of the English language Must posses a desktop or laptop with an uninterrupted service connection"
            },
            {
              "Que":"I am not a Masai Student. Can i still refer a friend?",
              "Ans":"Yes. If you are aware of Masai and believe in what we are doing, then just make a profile on our website and start referring."
            },
            {
              "Que":"Can the coins be redeemed for cash?",
              "Ans":"No, you can only redeem the coins for Amazon Vouchers or to unlock goodies from our Select Catalogue."
            },
            {
              "Que":"Is there a limit to the number of referrals per person?",
              "Ans":"No, you can refer as many people as you like and unlock more coins."
            },
            {
              "Que":"Whom can I not refer?",
              "Ans":"You cannot refer someone who has finished the admissions process before the date of referral and you cannot refer yourself."
            },
            {
              "Que":"What happens if my friend forgets to input the referral code on sign-up?",
              "Ans":"In this case, we would not be able to help you. This will not be counted as a successful referral."
            },
            {
              "Que":"Is there an expiry date for the coins?",
              "Ans":"No, you can redeem your coins whenever you like."
            },
            {
              "Que":"My query is not covered here and I have a problem with my referral, whom can I get in touch with?",
              "Ans":"Please reach out to us at &#x72;&#x65;&#x66;&#x65;&#114;&#x72;&#x61;&#x6c;&#x40;&#x6d;&#97;&#x73;&#97;&#x69;&#115;&#x63;&#104;&#111;&#111;&#x6c;&#46;&#x63;&#111;&#109; and we will get back to you within 72 working hours."
            },
            {
              "Que":"Are the coin transferable?",
              "Ans":"No, only the referrer or the referee can use the coins. These are not transferable to any third party."
            },
            {
              "Que":"How does the referal system works?",
              "Ans":"For the Referrer: Sign up on the website and Click on ‘Refer & Earn’ and share your referrer code with your friend. After the referee successfully clears MSAT and the Onboarding Process, 100 Coins will be credited to your account, for each action, which you can redeem for an Amazon Voucher and other rewards. After the referee successfully completes 7 days in a course, 500 coins will be credited to your account. You can either use these coins to unlock goodies from our Select Catalogue or redeem for more Amazon Vouchers. For the Referee: You will receive the referral code from your friend. Just click on the link and sign up on the website with the referral code. After clearing MSAT and the Onboarding Process, 100 Coins will be credited to your account, which you can redeem for an Amazon Voucher and other rewards. After completing 7 days in a course, 500 coins will be credited to your account. You can either use these coins to unlock goodies from our Select Catalogue or redeem for more Amazon Vouchers."
            },
            {
              "Que":"How can i use the coin earned by me?",
              "Ans":"You can either use these coins to unlock goodies from our Select Catalogue or redeem them for Amazon Vouchers."
            },
            {
              "Que":"What all courses can I refer people to?",
              "Ans":"You can refer people to all Masai courses, according to the eligibility of the referee."
            }
          ]
    )
  
    // new_event.save();
    res.send({msg:"Reward added successfully"});
  });



  RewardRouter.get("/getReward",async(req,res)=>{
    const my_Reward = await RewardModel.find();
    res.send(my_Reward);
  })
  
  module.exports = {
      RewardRouter
  }