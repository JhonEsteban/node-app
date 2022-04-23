const { request, response } = require('express');

const jwt = require('jsonwebtoken');

const validateTokenByParams = (req = request, res = response, next) => {
  const { token } = req.params;

  try {
    if (!token) {
      return res.status(400).json({
        message: 'Token de sesión no válido',
      });
    }

    const secret = process.env.JWT_SECRET;
    const { userId } = jwt.verify(token, secret);

    req.userId = userId;

    next();
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = validateTokenByParams;
