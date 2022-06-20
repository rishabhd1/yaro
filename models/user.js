const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phoneNumber: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  dob: {
    required: true,
    type: String,
  },
  gender: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('user', userSchema);
