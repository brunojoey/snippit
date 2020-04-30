const router = require('express').Router();
const db = require('../../models');
const userRoutes = require('./users');
const snipRoutes = require('./snips');

// Catch user and snip routes.
router.use('/users', userRoutes);
router.use('/snips', snipRoutes);

// ================================== LOGOUT/STATUS ==================================

// Route to terminate a login session. According to passport docs, invoking req.logout() will
// remove the req.user property and clear the lgoin session (if any).
router.get('/logout', (req, res) => {
  req.logout();
  return res.json({ status: false });
});

// Route to determine if user is logged in.
router.get('/status', (req, res) => {
  console.log('ROUTER POST /API/STATUS');
  if (req.user) {
    db.User.findById(req.user[0].id)
      .then(dbUser =>  res.json(dbUser))
      .catch(err => console.log(err));
  }

  // User is not logged in
  else { return res.json({ status: false }); }
});

// ===================================================================================


module.exports = router;
