const db = require('../models');

// Methods for snips controller.
module.exports = {
  findAll: function(req, res) {
    db.Snip
      .find(req.query)
      .sort({ createdAt: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Snip
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Snip
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log('UPDATE');
    console.log('REQ.PARAMS.ID: ', req.params.id);
    console.log('REQ.BODY: ', req.body);
    db.Snip
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log('INSIDE FIND-ONE-AND-UPDATE');
        console.log('DB-MODEL: ', dbModel);
        return res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Snip
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
