const User = require('../models/user.model');

const generateToken = require('../helpers/generateToken');

class AuthService {
  async registerUser(userData) {
    const newUser = new User(userData);
    await newUser.save();

    const { _id, name, email, profileImg } = newUser;

    return {
      token: await generateToken(_id),
      user: {
        name,
        email,
        profileImg,
      },
    };
  }

  async loginUser(userData) {
    const { _id, name, email, profileImg } = await User.findOne({
      email: userData.email,
    });

    return {
      token: await generateToken(_id),
      user: {
        name,
        email,
        profileImg,
      },
    };
  }

  async loginUserById(userId) {
    const { name, email, profileImg } = await User.findById(userId);

    return {
      token: await generateToken(userId),
      user: {
        name,
        email,
        profileImg,
      },
    };
  }
}

module.exports = AuthService;
