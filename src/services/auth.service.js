const User = require('../models/user.model');

const generateToken = require('../helpers/generateToken');

class AuthService {
  async registerUser(userData) {
    const newUser = new User(userData);
    await newUser.save();

    const { _id, name, email, image } = newUser;

    return {
      token: await generateToken(_id),
      user: {
        name,
        email,
        image,
      },
    };
  }

  async loginUser(userData) {
    const { _id, name, email, image } = await User.findOne({
      email: userData.email,
    });

    return {
      token: await generateToken(_id),
      user: {
        name,
        email,
        image,
      },
    };
  }

  async loginUserById(userId) {
    const { name, email, image } = await User.findById(userId);

    return {
      token: await generateToken(userId),
      user: {
        name,
        email,
        image,
      },
    };
  }
}

module.exports = AuthService;
