const iniState = {
    Reward: [
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
         
      ]
}

export const rewardReducer = (state = iniState, {
    type,
    payload
}) => {
    switch (type) {
        default:
            return state
    }
}