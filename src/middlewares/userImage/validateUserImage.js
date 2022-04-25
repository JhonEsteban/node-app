const { request, response } = require('express');

const validateUserImage = (req = request, res = response, next) => {
  const { files } = req;

  if (!files || Object.keys(files).length === 0 || !files.newImage) {
    return res.status(400).json({
      message: 'Debes subir una imagen para tu perfil de usuario',
    });
  }

  next();
};

module.exports = validateUserImage;
