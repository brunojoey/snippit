const router = require('express').Router();
const snipsController = require('../../controllers/snipsController');

// Matches with '/api/snips'
router.route('/')
  .get(snipsController.findAll)
  .post(snipsController.create);

// Matches with '/api/snips/:id'
router.route('/:id')
  .get(snipsController.findById)
  .put(snipsController.update)
  .delete(snipsController.remove);

  module.exports = router;
