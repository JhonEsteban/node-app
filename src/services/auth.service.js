const User = require('../models/user.model');

const generateToken = require('../helpers/generateToken');

class AuthService {
  async registerUser(userData) {
    const newUser = new User(userData);
    await newUser.save();

    const userId = newUser._id;

    return await generateToken(userId);
  }

  async loginUser({ email }) {
    const dbUser = await User.findOne({ email });
    const userId = dbUser._id;

    return await generateToken(userId);
  }
}

module.exports = AuthService;
