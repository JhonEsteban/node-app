const { request, response } = require('express');
const bcrypt = require('bcryptjs');

const encryptPassword = async (req = request, res = response, next) => {
  const { password } = req.body;

  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(password, salt);

  next();
};

module.exports = encryptPassword;
