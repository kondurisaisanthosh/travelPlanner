const passport = require('passport');
const keys = require('./auth');
const User = require('../users/user.model');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: keys.google.callbackURL,
},
  function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      User.findOne({ 'googleId': profile.id }, function (err, user) {
        if (err)
          return done(err);

        if (user) {

          return done(null, user);
        } else {
          var newUser = new User({
            name: profile.displayName,
            email:profile.emails[0].value,
            googleId: profile.id,
            role: 'User',
            travelAgent: false,
            authData: profile
          });
          newUser.save(function (err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });
    });

  }));
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
