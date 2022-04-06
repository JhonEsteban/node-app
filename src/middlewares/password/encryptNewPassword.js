const { request, response } = require('express');

const bcrypt = require('bcryptjs');

const encryptNewPassword = async (req = request, res = response, next) => {
  const { newPassword } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    req.body.newPassword = await bcrypt.hash(newPassword, salt);

    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = encryptNewPassword;
