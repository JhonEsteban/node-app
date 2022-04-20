const { request, response } = require('express');

const User = require('../../models/user.model');

const validateEmailRepeated = async (req = request, res = response, next) => {
  const { email } = req.body;

  const emailExist = await User.findOne({ email });

  if (emailExist) {
    return res.status(400).json({
      message: 'Correcto electronico no valido',
    });
  }

  next();
};

module.exports = validateEmailRepeated;
