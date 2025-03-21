const express = require('express');
const router = express.Router();
const ClubBooking = require('../models/clubModel');
const verifyToken = require('../middlweres/authMiddleware');

// Create a new booking
router.post('/bookings', verifyToken, async (req, res) => {
  try {
    const { name, email, guests, date, venue, specialRequests } = req.body;

    const newBooking = new ClubBooking({
      name,
      email,
      guests,
      date,
      venue,
      specialRequests,
    });

    await newBooking.save();

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: newBooking,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create booking',
      error: error.message,
    });
  }
});

module.exports = router;