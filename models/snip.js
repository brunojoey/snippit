const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SnipSchema = new Schema({
  body: { type: String, require: true },
  responses: [{
    type: Schema.Types.ObjectId,
    ref: 'Snip'
  }]
});

const Snip = mongoose.model('Snip', SnipSchema);
module.exports = Snip;
