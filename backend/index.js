const express = require("express");
const { connection } = require("./config/db");
const { UserRouter } = require("./routes/User.router");
require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
  res.send("this is base api")
})

app.use("/auth",UserRouter) 
 
 
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