const bcrypt = require('bcryptjs');

exports.hashPassword = async (password) => await bcrypt.hash(password, 10);

exports.validatePassword = async (candidatePassword, hashedPassword) => {
  //   console.log({ candidatePassword, hashedPassword });
  return await bcrypt.compare(candidatePassword, hashedPassword);
};
