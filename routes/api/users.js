const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

// Matches with '/api/users'
router.route('/')
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with '/api/users/:id'
router.route('/:id')
  .get(usersController.findById)
  .put(isAuthenticated, usersController.update)
  .delete(isAuthenticated, usersController.remove);

  module.exports = router;
