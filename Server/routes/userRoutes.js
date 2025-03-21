const express = require('express');
const verifyToken = require('../middlweres/authMiddleware');
const User = require('../models/User');
const router = express.Router();

// Fetch all users
router.get('/users', verifyToken, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;