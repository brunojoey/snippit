const router = require('express').Router();
const passport = require('../config/passport');
const userRoutes = require('./users');
const snipRoutes = require('./snips');

// Catch user and snip routes.
router.use('/users', userRoutes);
router.use('/snips', snipRoutes);

// Route to login. Uses passport.authenticate middleware that was set up with local strategy.
// If the user has valid login credentials, sign them in. Otherwise send an error.
router.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }, (req, res) => {
  if (req.user) { return res.json(req.user); }

  // Login was unsuccessful.
  return res.json({ 'error': 'no user' });
}));

// Route to terminate a login session. According to passport docs, invoking req.logout() will
// remove the req.user property and clear the lgoin session (if any).
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});


module.exports = router;
