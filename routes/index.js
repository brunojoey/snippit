const path = require('path');
const router = require('express').Router();
const passport = require('../config/passport');
const apiRoutes = require('./api');
const db = require('../models');

// Catch all API routes.
router.use('/api', apiRoutes);

// =================================== SIGNUP/LOGIN ===================================

// Route to signup. If the user is created successfully, respond with the user information. The
// client side should hanlde login upon successful creation.
router.post('/signup', (req, res) => {
  db.User
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(401).json(err));
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

// ====================================================================================

// If no other routes are hit, send the React app.
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
