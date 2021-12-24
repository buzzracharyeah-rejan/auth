const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  hash: String,
  salt: String,
});

// userSchema.statics.hashPassword = async function (password) {
//   return await bcrypt.hash(password, 10);
// };

// userSchema.statics.validatePassword = async function (candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.hash);
// };

const User = mongoose.model('User', userSchema);

module.exports = User;
