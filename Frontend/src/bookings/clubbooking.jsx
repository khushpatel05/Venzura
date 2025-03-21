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
    venue: '',
    specialRequests: '',
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [success, setSuccess] = useState(false); // Success state

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    setError(null); // Reset error state
    setSuccess(false); // Reset success state

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found. Please log in again.');
        return;
      }

      // Validate form data
      if (!formData.name || !formData.email || !formData.guests || !formData.date || !formData.venue) {
        setError('Please fill in all required fields.');
        return;
      }

      // Send form data to the backend
      const response = await fetch('http://localhost:4000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit booking');
      }

      const result = await response.json();
      console.log('Booking created successfully:', result);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        guests: 1,
        date: new Date(),
        venue: '',
        specialRequests: '',
      });

      setSuccess('Booking created successfully!');
      alert('Booking created successfully!');
    } catch (error) {
      console.error('Error submitting booking:', error);
      setError(error.message || 'Failed to submit booking. Please try again.');
    } finally {
      setLoading(false); // Set loading to false
    }
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
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {success && <p className="text-green-500 text-center mb-4">{success}</p>}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                />
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
                  disabled={loading}
                >
                  <option value="">Select Venue</option>
                  <option value="club">Club</option>
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
                  disabled={loading}
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
                  disabled={loading}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-xl font-medium shadow-md hover:bg-gray-800 transition-colors duration-300"
                  disabled={loading} // Disable button when loading
                >
                  {loading ? 'Submitting...' : 'Confirm Booking'}
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