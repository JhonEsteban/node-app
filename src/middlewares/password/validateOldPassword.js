const { request, response } = require('express');

const bcrypt = require('bcryptjs');

const User = require('../../models/user.model');

const validateOldPassword = async (req = request, res = response, next) => {
  const { userId } = req;
  const { currentPassword } = req.body;

  try {
    const dbUser = await User.findById(userId);

    const validPassword = await bcrypt.compare(
      currentPassword,
      dbUser.password
    );

    if (!validPassword) {
      return res.status(400).json({
        message: 'Contraseña actual incorrecta',
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = validateOldPassword;
