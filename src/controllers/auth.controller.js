const { request, response } = require('express');

const AuthService = require('../services/auth.service');

const authService = new AuthService();

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

module.exports = {
  register,
  login,
  verifyAndRenewToken,
};
