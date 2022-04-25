const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const {
  validateFields,
  validateToken,
  validateTokenByParams,
  validateOldPassword,
  encryptNewPassword,
  validateUserImage,
  validateImageExtension,
  deletePreviousUserImage,
} = require('../middlewares');

const {
  updateUserNameById,
  updateUserPasswordById,
  updateUserImageById,
} = require('../controllers/user.controller');

router.put(
  '/update-name',
  [
    validateToken,
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields,
  ],

  updateUserNameById
);

router.put(
  '/update-password',
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

router.put(
  '/:token/change-password',
  [
    validateTokenByParams,
    check(
      'newPassword',
      'La nueva contraseña debe ser de minimo 6 carácteres'
    ).isLength({ min: 6 }),
    validateFields,
    encryptNewPassword,
  ],
  updateUserPasswordById
);

router.put(
  '/update-image',
  [
    validateToken,
    validateUserImage,
    validateImageExtension,
    deletePreviousUserImage,
  ],
  updateUserImageById
);

module.exports = router;
