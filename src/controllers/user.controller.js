const { request, response } = require('express');

const UserService = require('../services/user.service');
const CloudinaryService = require('../services/cloudinary.service');

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

const updateUserImageById = async (req = request, res = response) => {
  const { userId } = req;
  const { files } = req;

  const cloudinaryService = new CloudinaryService();

  try {
    const { newImage } = files;

    const { secure_url } = await cloudinaryService.saveUserImage(newImage);
    await userService.updateProfileImg(userId, secure_url);

    res.json({ message: 'Imagen de perfil actualiza con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  updateUserNameById,
  updateUserPasswordById,
  updateUserImageById,
};
