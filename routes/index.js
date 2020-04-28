const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// Catch all API routes.
router.use('/api', apiRoutes);

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

// If no other routes are hit, send the React app.
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
