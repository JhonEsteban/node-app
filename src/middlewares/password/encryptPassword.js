const { request, response } = require('express');
const bcrypt = require('bcryptjs');

const encryptPassword = async (req = request, res = response, next) => {
  const { password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(password, salt);

    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = encryptPassword;
