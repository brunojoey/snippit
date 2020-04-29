const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

// Set up the local strategy that passport will use. The strategy requires a 'verify'
// callback, which accepts these credentials and calls 'done' providing a user
passport.use(new LocalStrategy(
  (username, password, done) => {
    // When a user tries to sign in, check if username is in database
    db.User.findOne({ username: username })
      .then((dbUser) => {
        // There was no user with the given username
        if (!dbUser) {
          return done(null, false, { message: 'Userame was incorrect.' });
        }
        // There was a user with the given username, but the password was incorrect
        if (!dbUser.validPassword(password)) {
          return done(null, false, { message: 'Password was incorrect.' });
        }
        // Username and password were both correct
        return done(null, dbUser);
    })
    .catch(err => console.log(err));
  }
));

// Each subsequent request will not contain credentials, but rather the unique cookie
// that identifies the session. In order to support login sessions, Passport will serialize
// and deserialize 'user' intances to and from the session. We will only serialize the user
// ID to the session, keeping the amount of data stored within the session small. When
// subsequent requests are recieved, this user object is used to find the user, which will
// be restored to 'req.user'.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.find({ _id: id })
    .then(dbUser => {
      done(null, dbUser)
    });
});

module.exports = passport;
