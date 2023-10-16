const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { connection } = require("./config/db");
const { EventRouter } = require("./routes/Event.router");
const { RewardRouter } = require("./routes/Reward.router");
const { FAQrouter } = require("./routes/FAQ.router");
const { CourseRouter } = require("./routes/Course.router");
const { ShareLinkrouter } = require("./routes/ShareLink.router");
const { UserRouter } = require("./routes/User.router");
const passport = require("passport");

const app = express();

app.use(express.json());
// app.use(passport.initialize())
// app.use(passport.session())
app.use(cors({
  origin:"*",
  credentials: true
}))

app.get("/",(req,res)=>{
  res.send("this is base api")
})

app.use("/rewards",RewardRouter);
app.use("/faqR",FAQrouter)
app.use("/event",EventRouter);
app.use("/course",CourseRouter);
app.use("/sharelink",ShareLinkrouter);
app.use("/user",UserRouter)

app.listen(process.env.PORT,async()=>{  
    try{
      await connection   
      console.log("connected to db successfully"); 
    }
    catch(err){
        console.log(err)
    }
    console.log(`Listening on port ${process.env.PORT}`)
})