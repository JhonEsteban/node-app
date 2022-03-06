const { Router } = require('express');

const { check } = require('express-validator');

const { register, login } = require('../controllers/auth.controller');

const validateFields = require('../middlewares/validateFields');

const validateEmailRepeated = require('../middlewares/email/validateEmailRepeated');
const encryptPassword = require('../middlewares/password/encryptPassword');

const validateEmailExists = require('../middlewares/email/validateEmailExists');
const validatePasswordExists = require('../middlewares/password/validatePasswordExists');

const router = Router();

router.post(
  '/register',
  [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('email', 'El correo eléctronico es requerido').isEmail(),
    check('password', 'La contraseña debe ser de minimo 6 carácteres').isLength(
      { min: 6 }
    ),
    validateFields,
    validateEmailRepeated,
    encryptPassword,
  ],
  register
);

router.post(
  '/login',
  [
    check('email', 'El correo eléctronico es requerido').isEmail(),
    check('password', 'La contraseña debe ser de minimo 6 carácteres').isLength(
      { min: 6 }
    ),
    validateFields,
    validateEmailExists,
    validatePasswordExists,
  ],
  login
);

module.exports = router;
