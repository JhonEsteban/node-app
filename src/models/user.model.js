const { Schema, model } = require('mongoose');

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
  profileImg: {
    type: String,
    default: 'https://i.imgur.com/6hAGxS5.png',
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model('User', userSchema);
