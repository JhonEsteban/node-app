const { request, response } = require('express');

const {
  isValidImage,
  validImgExtensions,
} = require('../../helpers/isValidImage');

const validateImageExtension = (req = request, res = response, next) => {
  const { files } = req;
  const { newImage } = files;

  const imageNames = newImage.name.split('.');
  const extension = imageNames[imageNames.length - 1];

  if (!isValidImage(extension)) {
    return res.status(400).json({
      message: `La extensión ${extension} no esta permitida`,
      validExtensions: `${validImgExtensions.join(', ')}`,
    });
  }

  next();
};

module.exports = validateImageExtension;
