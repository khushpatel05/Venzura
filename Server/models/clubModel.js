    const mongoose = require('mongoose');

    const clubBookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
        min: 1,
    },
    date: {
        type: Date,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    specialRequests: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    });

    const ClubBooking = mongoose.model('ClubBooking', clubBookingSchema);

    module.exports = ClubBooking;