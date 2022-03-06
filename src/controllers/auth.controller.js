const { request, response } = require('express');

const AuthService = require('../services/auth.service');

const authService = new AuthService();

const register = async (req = request, res = response) => {
  try {
    const token = await authService.registerUser(req.body);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({
      message: 'Error en el servidor',
    });
  }
};

const login = async (req = request, res = response) => {
  try {
    const token = await authService.loginUser(req.body);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({
      message: 'Error en el servidor',
    });
  }
};

module.exports = {
  register,
  login,
};
