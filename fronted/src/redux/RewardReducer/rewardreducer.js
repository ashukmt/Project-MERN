import { ERROR, GET_REWARDS, LOAD,GET_FAQS, ADD_ADDRESS_REQUEST } from "./actiontype"

const iniState = {
    Rewards: [
        {
          "Gift_url":"https://masai-website-images.s3.ap-south-1.amazonaws.com/amazon_vouchor_94d330a4b2.png",
          "Gift_name":"Amazon Voucher",
          "Coin_Req":100
        },
        {
          "Gift_url":"https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_ef30609f7d.png",
          "Gift_name":"Mechanical Keyboard",
          "Coin_Req":4000
        },
        {
          "Gift_url":"https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_1_315739c64c.png",
          "Gift_name":"Amazon Firestick",
          "Coin_Req":3000
        },
        {
          "Gift_url":"https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_2_20f5e1fa71.png",
          "Gift_name":"Amazon Echo",
          "Coin_Req":3000
        },
        {
          "Gift_url":"https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_3_46f3143653.png",
          "Gift_name":"Netflix Subscription",
          "Coin_Req":2400
        },
        {
          "Gift_url":"https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_4_99b7c43667.png",
          "Gift_name":"Smart Watch",
          "Coin_Req":1500
        },
        {
          "Gift_url":"https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_5_dd1acee459.png",
          "Gift_name":"Masai T shirt",
          "Coin_Req":500
        }
         
      ],

     FAQs: [
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
      ],

      UserData:[
        {
          "Name":"Tushar Sapate",
          "Coin":4000,
        },
        {
          "Name":"Tushar Sapate",
          "Coin":4000,
        },
        {
          "Name":"Tushar Sapate",
          "Coin":4000,
        },
        {
          "Name":"Tushar Sapate",
          "Coin":4000,
        },
        {
          "Name":"Tushar Sapate",
          "Coin":4000,
        },
        {
          "Name":"Tushar Sapate",
          "Coin":4000,
        }
      
      ]
}

// const iniState = {
//   Rewards: [],
//   FAQs:[],
//   Address:{},
//   isLoading: false,
//   isError: false
// }

// export const rewardReducer = (state = iniState, {
//   type,
//   payload
// }) => {
//   switch (type) {
//       case LOAD: return {...state,isLoading:true}
//       case ERROR: return {...state,isError:true}
//       case GET_REWARDS: return {...state,isLoading:false,Rewards:payload}
//   case GET_FAQS: return {...state,isLoading:false,FAQs:payload}
//   case ADD_ADDRESS_REQUEST: return {...state,isLoading:false,Address:payload}
//       default:
//           return state
//   }
// }


export const rewardReducer = (state = iniState, {
    type,
    payload
}) => {
    switch (type) {
        default:
            return state
    }
}