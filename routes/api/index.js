const router = require('express').Router();
const passport = require('../config/passport');
const userRoutes = require('./users');
const snipRoutes = require('./snips');

// Catch user and snip routes.
router.use('/users', userRoutes);
router.use('/snips', snipRoutes);

module.exports = router;
