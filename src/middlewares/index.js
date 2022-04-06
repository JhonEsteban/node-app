const validateFields = require('./validateFields');
const validateEmailExists = require('./email/validateEmailExists');
const validateEmailRepeated = require('./email/validateEmailRepeated');
const validatePasswordExists = require('./password/validatePasswordExists');
const validateOldPassword = require('./password/validateOldPassword');
const encryptPassword = require('./password/encryptPassword');
const encryptNewPassword = require('./password/encryptNewPassword');
const validateToken = require('./validateToken');

module.exports = {
  validateFields,
  validateEmailExists,
  validateEmailRepeated,
  validatePasswordExists,
  validateOldPassword,
  encryptPassword,
  encryptNewPassword,
  validateToken,
};
