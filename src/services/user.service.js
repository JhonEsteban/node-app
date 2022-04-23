const User = require('../models/user.model');

class UserService {
  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async updateName(userId, name) {
    await User.findByIdAndUpdate(userId, { name });
  }

  async updatePassword(userId, newPassword) {
    await User.findByIdAndUpdate(userId, { password: newPassword });
  }
}

module.exports = UserService;
