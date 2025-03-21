const ClubBooking = require('../models/clubModel');

// Create a new booking
const createBooking = async (req, res) => {
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
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await ClubBooking.find();
    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings',
      error: error.message,
    });
  }
};

module.exports = { createBooking, getAllBookings };