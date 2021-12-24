const express = require('express');
const passport = require('passport');

const server = require('./configs/database');
const authController = require('./controllers/auth');

const app = express();

//register middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//! register passport
require('./configs/newPassport');
app.use(passport.initialize());

app.get('/', (req, res, next) => res.status(200).send('<h4>say hi from the other world </h4>'));
app.post('/register', authController.register);
app.post('/login', passport.authenticate('local', { session: false }), authController.genTkn);

app.listen(process.env.PORT, () => {
  console.log(`server listening at port ${process.env.PORT}`);
  server.start();
});
