const express = require("express");
const { model } = require("mongoose");
const { UserModel } = require("../models/User.model");
const crypto = require("crypto");
const LocalStrategy = require("passport-local");
const session = require('express-session');
const { myPassport } = require("../middlewares/passportConfig");
// const passport =  require("../middlewares/passportConfig");


const UserRouter = express.Router();

// console.log(passport)



UserRouter.post("/signup/google", (req, res) => {
  const { name, email, number, password } = req.body;
});

UserRouter.post("/signup/db",
myPassport.authenticate('local-signup', { session: false }),
(req, res, next) => {
  // sign up
  res.json({
    user: req.user,
  });
}
);

UserRouter.post(
    "/login/db",
    myPassport.authenticate('local-login', { session: false }),
    (req, res, next) => {
      
      res.json({
        user: req.user,
      });
    }
   );




module.exports = {
  UserRouter,
};
