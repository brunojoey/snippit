const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const path = require('path');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { 
    type: String, 
    require: true,
    minLength: 8,
    maxLength: 20,
    match: /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*.{8,20}/,
    unique: true
  },
  password: { 
    type: String, 
    require: true,
    minLength: 8,
    maxLength: 20
  },
  biography: { type: String, require: false },
  imageUrl: { type: String, require: false },
  points: { type: Number, require: false, default: 0 },
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
