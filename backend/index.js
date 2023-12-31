const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

require("dotenv").config();

const { connection } = require("./config/db");
const { EventRouter } = require("./routes/Event.router");
const { RewardRouter } = require("./routes/Reward.router");
const { FAQrouter } = require("./routes/FAQ.router");
const { CourseRouter } = require("./routes/Course.router");
const { ShareLinkrouter } = require("./routes/ShareLink.router");
const { QuestionRouter } = require("./routes/Question.router");
const { UserRouter } = require("./routes/User.router");
const { UserModel } = require("./models/User.model");

// require("./middlewares/Auth");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(
  cors({
    origin: "*",
  })
);
// app.use(
//   session({
//     secret: "mysecret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: false
//     },
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

app.get("/", (req, res) => {
  res.send("this is base api");
});

// app.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["email", "profile"]
//   })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/auth/protected",
//     failureRedirect: "/auth/google/failure",
//   })
// );

// app.get("/auth/google/failure", (req, res) => {
//   res.send("Something went wrong!");
// });

// app.get("/auth/protected", isLoggedIn, (req, res) => {
//   let name = req.user.displayName;
//   res.send(`Hello ${name}`);
// });

// app.use("/auth/logout", (req, res) => {
//   req.session.destroy();
//   res.send("See you again!");
// });

app.use("/rewards", RewardRouter);
app.use("/faqR", FAQrouter);
app.use("/event", EventRouter);
app.use("/course", CourseRouter);
app.use("/question", QuestionRouter);
app.use("/sharelink", ShareLinkrouter);
app.use("/user", UserRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db successfully");
  } catch (err) {
    console.log(err);
  }
  console.log(`Listening on port ${process.env.PORT}`);
});