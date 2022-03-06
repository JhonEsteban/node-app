const { request, response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../../models/user.model');

const validatePasswordExists = async (req = request, res = response, next) => {
  const { email, password } = req.body;

  const dbUser = await User.findOne({ email });
  const validPassword = await bcrypt.compare(password, dbUser.password);

  if (!validPassword) {
    return res.status(400).json({
      message: 'Contraseña incorrecta',
    });
  }

  next();
};

module.exports = validatePasswordExists;
