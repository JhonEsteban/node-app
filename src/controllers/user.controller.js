const { request, response } = require('express');

const UserService = require('../services/user.service');

const userService = new UserService();

const updateUserNameById = async (req = request, res = response) => {
  const { userId } = req;
  const { name } = req.body;

  try {
    await userService.updateName(userId, name);

    res.json({
      message: 'Nombre actualizado con éxito',
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUserPasswordById = async (req = request, res = response) => {
  const { userId } = req;
  const { newPassword } = req.body;

  try {
    await userService.updatePassword(userId, newPassword);

    res.json({
      message: 'Contraseña actualizada con éxito',
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  updateUserNameById,
  updateUserPasswordById,
};
