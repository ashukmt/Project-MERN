const express = require("express");
const {
  UserModel
} = require("../models/User.model");
const referralCodeGenerator = require("referral-code-generator");
const bcrypt = require("bcrypt");

const UserRouter = express.Router();
UserRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find()
    res.status(200).json(users)
    console.log("f")
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error")
  }
})

UserRouter.get("/:_id", async (req, res) => {
  try {
    const {
      _id
    } = req.params;
    const user = await UserModel.find({
      _id
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

UserRouter.post("/addUser", async (req, res) => {
  try {
    const {
      username,
      email,
      password
    } = req.body;

    const user_present = await UserModel.findOne({
      email
    });

    if (user_present) {
      res.status(409).send(
        "Email Already Exist In Database"
      );
    } else {
      bcrypt.hash(password, 4, async function (err, hash) {
        const new_user = await new UserModel({
          username,
          email,
          password: hash,
          referalCode: referralCodeGenerator.alpha("lowercase", 12),
        });
        await new_user.save();
        res.status(200).send({
          msg: "User Added Successfully",
       
        });
      });

    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});


// <-------------- Login ------------>
UserRouter.post("/login", async (req, res) => {
  try {


    const user_present = await UserModel.findOne({
      email:req.body.email
    });

    if(req.body.gauth){
      res.status(200).send("Login Successfull")
    } 
   

    if (!user_present) {
      res.status(409).send(
        "Email Does not exist!"
      );
    }
   
    else if (user_present) {
      const hash_pass = await user_present.password;
      const Result = bcrypt.compareSync(password, hash_pass); // true
      if (!Result) {
        res.status(410).send(
          "Password Does not match"
        );
      } else {
        res.status(200).send({ msg: "Login successfull"});
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});


UserRouter.patch("/editUser/:id", async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    res.status(200).send({
      msg: "User Updated Successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = {
  UserRouter,
};