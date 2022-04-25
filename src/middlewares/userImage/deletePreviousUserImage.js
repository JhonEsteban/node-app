const { request, response } = require('express');

const User = require('../../models/user.model');
const CloudinaryService = require('../../services/cloudinary.service');

const getUserImageName = require('../../helpers/getUserImageName');

const deletePreviousUserImage = async (req = request, res = response, next) => {
  const { userId } = req;

  try {
    const { image } = await User.findById(userId);

    if (image) {
      const imageName = getUserImageName(image);
      await CloudinaryService.deleteUserImage(imageName);
    }

    next();
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = deletePreviousUserImage;
