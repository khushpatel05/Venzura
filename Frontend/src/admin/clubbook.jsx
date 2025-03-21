import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserCircle, FaEdit, FaTrash } from 'react-icons/fa'; // Import FaUserCircle

const ClubBook = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch booking data from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No token found. Please log in again.');
          return;
        }

        const response = await fetch('http://localhost:4000/api/bookings', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            setError('Unauthorized. Please log in again.');
          } else if (response.status === 400) {
            setError('Bad request. Please check your input.');
          } else {
            setError('Failed to fetch booking data. Please try again.');
          }
          return;
        }

        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching booking data:', error);
        setError('Failed to fetch booking data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Handle booking deletion
  const handleDelete = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }

      setBookings(bookings.filter((booking) => booking._id !== bookingId));
    } catch (error) {
      console.error('Error deleting booking:', error);
      setError('Failed to delete booking. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-black">Venzura Admin</div>
            <div className="flex items-center">
              <FaUserCircle className="w-10 h-10 text-black" /> {/* Use FaUserCircle here */}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-64 bg-black shadow-lg p-6 border-r border-gray-700"
        >
          <div className="mb-8">
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          </div>
          <nav className="space-y-4">
            <Link
              to="/user"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-300"
            >
              <span className="ml-2">Users</span>
            </Link>
            <Link
              to="/admin/venue"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-300"
            >
              <span className="ml-2">Venue</span>
            </Link>
            <Link
              to="/clubbook"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-300"
            >
              <span className="ml-2">Musician/Host</span>
            </Link>
            <Link
              to="/admin/payment"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-300"
            >
              <span className="ml-2">Payment</span>
            </Link>
            <Link
              to="/admin/modifications"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-300"
            >
              <span className="ml-2">Modifications</span>
            </Link>
          </nav>
        </motion.div>

        {/* Main Content Area */}
        <main className="flex-grow p-8 bg-gray-50">
          {loading && <p className="text-gray-700">Loading booking data...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="py-3 px-6 text-left text-white">Name</th>
                    <th className="py-3 px-6 text-left text-white">Email</th>
                    <th className="py-3 px-6 text-left text-white">Guests</th>
                    <th className="py-3 px-6 text-left text-white">Date</th>
                    <th className="py-3 px-6 text-left text-white">Venue</th>
                    <th className="py-3 px-6 text-left text-white">Special Requests</th>
                    <th className="py-3 px-6 text-left text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking._id} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                      <td className="py-4 px-6 text-gray-900">{booking.name}</td>
                      <td className="py-4 px-6 text-gray-900">{booking.email}</td>
                      <td className="py-4 px-6 text-gray-900">{booking.guests}</td>
                      <td className="py-4 px-6 text-gray-900">{new Date(booking.date).toLocaleDateString()}</td>
                      <td className="py-4 px-6 text-gray-900">{booking.venue}</td>
                      <td className="py-4 px-6 text-gray-900">{booking.specialRequests}</td>
                      <td className="py-4 px-6">
                        <button
                          className="text-blue-600 hover:text-blue-800 mr-4 transition-colors"
                          onClick={() => console.log('Edit booking:', booking._id)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800 transition-colors"
                          onClick={() => handleDelete(booking._id)}
                        >
                          
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ClubBook;