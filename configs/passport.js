const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');
const { validatePassword } = require('../utils/genPassword');

const customFields = {
  usernameField: 'email',
  passwordField: 'password',
};

const verify = async (email, password, done) => {
  // console.log('verify');
  try {
    const user = await User.findOne({ email });

    if (!user) done(null, false, { message: 'incorrect email or password' });

    const isValidated = await validatePassword(password, user.password);
    if (!isValidated) done(null, false, { message: 'incorrect email or password' });

    done(null, user);
  } catch (error) {
    done(error);
  }
};

passport.use('local', new LocalStrategy(customFields, verify));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (_id, done) => {
//   try {
//     const user = await User.findById(_id);
//     if (user) done(null, user);
//   } catch (error) {
//     done(error);
//   }
// });
