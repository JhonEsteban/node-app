const { request, response } = require('express');
const generateToken = require('../helpers/generateToken');

const AuthService = require('../services/auth.service');
const NodemailerService = require('../services/nodemailer.service');
const UserService = require('../services/user.service');

const authService = new AuthService();
const nodemailerService = new NodemailerService();
const userService = new UserService();

const register = async (req = request, res = response) => {
  try {
    const { token, user } = await authService.registerUser(req.body);

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({
      message: 'Error en el servidor',
    });
  }
};

const login = async (req = request, res = response) => {
  try {
    const { token, user } = await authService.loginUser(req.body);

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({
      message: 'Error en el servidor',
    });
  }
};

const verifyAndRenewToken = async (req = request, res = response) => {
  const { userId } = req;

  try {
    const { token, user } = await authService.loginUserById(userId);

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({
      message: 'Error en el servidor',
    });
  }
};

const forgotMyPassword = async (req = request, res = response) => {
  const { email } = req.body;

  try {
    const { _id, name } = await userService.getUserByEmail(email);
    const token = await generateToken(_id);

    nodemailerService.setChangePasswordUrl(token);
    await nodemailerService.sendEmailToUser(email, name);

    res.json({
      message: 'Se envió un enlace de recuperación a tu correo',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error en el servidor',
    });
  }
};

module.exports = {
  register,
  login,
  verifyAndRenewToken,
  forgotMyPassword,
};
