// const passport = require ('passport');
// const GoogleStrategy = require ('passport-google-oauth2').Strategy;
// require ('dotenv').config ();
// passport.use (
//   new GoogleStrategy (
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: 'http://localhost:8080/auth/google/callback',
//       passReqToCallback: true,
//     },
//     function (request, accessToken, refreshToken, profile, done) {
//       done (null, profile);
//     }
//   )
// );
// console.log("Auth Done")
// passport.serializeUser ((user, done) => {
//   done (null, user);
// });

// passport.deserializeUser ((user, done) => {
//   done (null, user);
// });