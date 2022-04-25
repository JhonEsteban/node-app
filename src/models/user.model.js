const { Schema, model } = require('mongoose');

require('dotenv').config();

const defaultUserImage = process.env.DEFAULT_USER_IMAGE;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    default: defaultUserImage,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model('User', userSchema);
