const path = require('path');
const router = require('express').Router();
const passport = require('../config/passport');
const apiRoutes = require('./api');
const db = require('../models');
const usersController = require('../controllers/usersController');

// Catch all API routes.
router.use('/api', apiRoutes);

// =================================== SIGNUP/LOGIN ===================================

// Route to signup. If the user is created successfully, respond with the user information. The
// client side should hanlde login upon successful creation.
router.route('/signup').post(usersController.create);

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

// If no other routes are hit, send to home page.
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
