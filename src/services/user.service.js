const User = require('../models/user.model');

class UserService {
  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async getUserImageById(userId) {
    const { image } = await User.findById(userId);
    return image;
  }

  async updateName(userId, newName) {
    const { name } = await User.findByIdAndUpdate(
      userId,
      { name: newName },
      { new: true }
    );

    return name;
  }

  async updatePassword(userId, newPassword) {
    await User.findByIdAndUpdate(userId, { password: newPassword });
  }

  async updateProfileImg(userId, newImage) {
    const { image } = await User.findByIdAndUpdate(
      userId,
      { image: newImage },
      { new: true }
    );

    return image;
  }
}

module.exports = UserService;
