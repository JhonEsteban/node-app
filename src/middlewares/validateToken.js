const { request, response } = require('express');

const jwt = require('jsonwebtoken');

const validateToken = (req = request, res = response, next) => {
  const authorization = req.headers['authorization'];

  try {
    if (!authorization) {
      return res.status(400).json({
        message: 'Debe registrarse o iniciar sesión',
      });
    }

    const authorizationArr = authorization.split(' ');
    const isBearerStr = authorizationArr[0] === 'Bearer';
    const token = authorizationArr[1];

    if (!isBearerStr || !token || authorizationArr.length > 2) {
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

module.exports = validateToken;
