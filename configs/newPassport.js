const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const User = require('../models/user');
const { validatePassword } = require('../utils/genPassword');

const options = {
  usernameField: 'email',
  passwordField: 'password',
};

const verify = async (email, password, cb) => {
  try {
    const user = await User.findOne({ email });
    if (!user) cb(null, false, { title: 'failed', message: 'email or password invalid' });

    const isValidUser = await validatePassword(password, user.password);
    if (!isValidUser) cb(null, false, { title: 'failed', message: 'email or password invalid' });

    cb(null, user);
  } catch (error) {
    cb(error);
  }
};
passport.use(new LocalStrategy(options, verify));
