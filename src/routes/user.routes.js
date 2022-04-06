const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const {
  validateFields,
  validateToken,
  validateOldPassword,
  encryptNewPassword,
} = require('../middlewares');

const {
  updateUserNameById,
  updateUserPasswordById,
} = require('../controllers/user.controller');

router.put(
  '/:id/update-name',
  [
    validateToken,
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields,
  ],

  updateUserNameById
);

router.put(
  '/:id/update-password',
  [
    validateToken,
    check(
      'currentPassword',
      'La contraseña actual debe ser de minimo 6 carácteres'
    ).isLength({ min: 6 }),
    check(
      'newPassword',
      'La nueva contraseña debe ser de minimo 6 carácteres'
    ).isLength({ min: 6 }),
    validateFields,
    validateOldPassword,
    encryptNewPassword,
  ],
  updateUserPasswordById
);

module.exports = router;
