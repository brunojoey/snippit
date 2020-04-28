const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  imageUrl: { type: String },
  points: { type: Number, default: 0 },
  snips: [{
    type: Schema.Types.ObjectId,
    ref: 'Snip'
  }]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
