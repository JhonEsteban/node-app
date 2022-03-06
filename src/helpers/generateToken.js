const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = { userId };
    const secret = process.env.JWT_SECRET;
    const expiresIn = '12h';

    jwt.sign(payload, secret, { expiresIn }, (err, token) => {
      if (err) {
        reject(err);
      }

      resolve(token);
    });
  });
};

module.exports = generateToken;
