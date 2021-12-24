const User = require('../models/user');
const { hashPassword } = require('../utils/genPassword');
const { issueTkn } = require('../utils/genTkn');

exports.register = async (req, res, next) => {
  try {
    const user = new User(req.body);
    user.password = await hashPassword(user.password);
    await user.save();
    res.status(201).json({ status: 'success', data: { user } });
  } catch (error) {
    res.status(400).json({ status: 'failed', error: error.message });
  }
};

exports.genTkn = async (req, res, next) => {
  const id = req.user._id;
  try {
    const token = await issueTkn(id.toString());

    if (!token) throw new Error();

    res.status(201).send({ status: 'success', data: { user: req.user, token } });
  } catch (error) {
    res.status(500).send({ status: 'failed', error: error.message });
  }
};
