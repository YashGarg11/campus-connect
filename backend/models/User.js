const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobile_NO: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const user = mongoose.model('User', userSchema);
module.exports = user;