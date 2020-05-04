const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  biography: { type: String, require: false },
  imageUrl: { type: String, default: 'https://picsum.photos/100' },
  points: { type: Number, default: 0 },
  snips: [{
    type: Schema.Types.ObjectId,
    ref: 'Snip'
  }]
});

// Method to check if unhashed password entered by the user can be compared
// to the hashed password stored in the database.
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
