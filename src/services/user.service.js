const User = require('../models/user.model');

class UserService {
  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async getUserImageById(userId) {
    const { image } = await User.findById(userId);
    return image;
  }

  async updateName(userId, name) {
    await User.findByIdAndUpdate(userId, { name });
  }

  async updatePassword(userId, newPassword) {
    await User.findByIdAndUpdate(userId, { password: newPassword });
  }

  async updateProfileImg(userId, newImage) {
    await User.findByIdAndUpdate(userId, { image: newImage });
  }
}

module.exports = UserService;
