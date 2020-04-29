const path = require('path');
const router = require('express').Router();
const passport = require('../config/passport');
const apiRoutes = require('./api');
const db = require('../models');

// Catch all API routes.
router.use('/api', apiRoutes);

// =================================== SIGNUP/LOGIN/LOGOUT ===================================

// Route to signup. If the user is created successfully, proceed to log the user in. Othewise,
// send back an error.
router.post('/signup', (req, res) => {
  db.User
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Route to login. Uses passport.authenticate middleware that was set up with local strategy.
// If the user has valid login credentials, sign them in. Otherwise send an error.
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { console.log(err); }

    // Username or password was incorrect.
    if (info) { res.json({ message: info.message }); } 
    
    // Username and password were correct.
    req.logIn(user, err => {
      if (err) { return next(err); }
      return res.json(user);
    });
  })(req, res, next);
});

// Route to terminate a login session. According to passport docs, invoking req.logout() will
// remove the req.user property and clear the lgoin session (if any).
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

// ===========================================================================================

// If no other routes are hit, send the React app.
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
