const jwt = require('jsonwebtoken');

exports.issueTkn = async (payload) => {
  return await jwt.sign(payload, 'super secret key');
};
