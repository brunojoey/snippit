const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SnipSchema = new Schema({
  isResponse: { type: Boolean, require: true },
  tagLine: { type: String, require: true },
  body: { type: String, require: false },
  code: { type: String, require: false },
  language: { type: String, require: true, default: 'javascript' },
  userId: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
  responses: [{
    type: Schema.Types.ObjectId,
    ref: 'Snip'
  }]
});

const Snip = mongoose.model('Snip', SnipSchema);
module.exports = Snip;
