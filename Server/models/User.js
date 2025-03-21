const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: {
    type: String, // Token for email-based password reset
    default: null, // Default to null
  },
  resetTokenExpiry: {
    type: Date, // Expiry time for the reset token
    default: null, // Default to null
  },
  otp: {
    type: String, // OTP for mobile or email-based verification
    default: null, // Default to null
  },
  otpExpiry: {
    type: Date, // Expiry time for the OTP
    default: null, // Default to null
  },
}, { timestamps: true });

// Export the User model
module.exports = mongoose.model('User', UserSchema);