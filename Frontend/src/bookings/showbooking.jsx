import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    date: new Date(),
    eventType: '',
    venue: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-6 py-8 flex flex-col items-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl space-y-8"
        >
          {/* Booking Form Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Book Your Event</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              {/* Number of Guests Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              {/* Event Type Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Music Concert">Music Concert</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Venue Selection Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Venue</label>
                <select
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="">Select Venue</option>
                  <option value="Banquet Hall">Banquet Hall</option>
                  <option value="Party Hall">Party plot</option>
                </select>
              </div>

              {/* Date Picker Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
                  required
                />
              </div>

              {/* Special Requests Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  rows="4"
                  placeholder="Any special requests or notes..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-xl font-medium shadow-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Confirm Booking
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Booking;