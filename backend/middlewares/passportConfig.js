const { UserModel } = require("../models/User.model");
const passport = require("passport")

const LocalStrategy = require("passport-local");



const myPassport = (passport) => {
    passport.use(
      "local-signup",
      new LocalStrategy(
        {
          usernameField: "email",
          passwordField: "password",
        },
        async (email, password, done) => {
          try {
            // check if user exists
            const userExists = await UserModel.findOne({ "email": email });
            if (userExists) {
              return done(null, false)
            }
            // Create a new user with the user data provided
            const user = await UserModel.create({ email, password });
            return done(null, user);
          } catch (error) {
            done(error);
          }
        }
      )
    );
   

   passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await UserModel.findOne({ email: email });
          if (!user) return done(null, false);
          const isMatch = await user.matchPassword(password);
          if (!isMatch)
            return done(null, false);
          // if passwords match return user
          return done(null, user);
        } catch (error) {
          console.log(error)
          return done(error, false);
        }
      }
    )
  );
}

module.exports = {
    myPassport
}
 