const express = require("express");
const { connection } = require("./config/db");
// const { UserRouter } = require("./routes/User.router");
const { EventRouter } = require("./routes/Event.router");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { RewardRouter } = require("./routes/Reward.router");
const { FAQrouter } = require("./routes/FAQ.router");
const { CourseRouter } = require("./routes/Course.router");

app.use(cors({
  origin:"*"
}))
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("this is base api")
})

// app.use("/auth",UserRouter) 



// < This is for Reward ----------------------->
app.use("/rewards",RewardRouter);

// <----------- FAQ Database Route--------->
app.use("/faqR",FAQrouter)
app.use("/event",EventRouter);
app.use("/course",CourseRouter);
 
app.listen(process.env.PORT,async()=>{  
    try{
      await connection   
      console.log("connected to db successfully"); 
    }
    catch(err){
        console.log(err)
    }
    console.log("Listening on port")
})