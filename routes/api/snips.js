const router = require('express').Router();
const snipsController = require('../../controllers/snipsController');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

// Matches with '/api/snips'
router.route('/')
  .get(snipsController.findAll)
  .post(isAuthenticated, snipsController.create);

// Matches with '/api/snips/:id'
router.route('/:id')
  .get(snipsController.findById)
  .put(isAuthenticated, snipsController.update)
  .delete(isAuthenticated, snipsController.remove);

  module.exports = router;
