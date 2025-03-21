import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();

  // Check if the user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // User is logged in
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    setIsLoggedIn(false); // Update login status
    navigate('/signin'); // Redirect to the sign-in page
  };

  return (
    <motion.nav
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-gray-800"
            whileHover={{ scale: 1.1 }}
          >
            <Link to="/home">Venzura</Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Venue', 'Musician-host', 'About', 'Booking'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item === 'Home' ? '/home' : `/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Login/Signup or Logout Buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              // Show Logout button if user is logged in
              <motion.div whileHover={{ scale: 1.1 }}>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md transition-colors font-medium"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </motion.div>
            ) : (
              // Show Login and Signup buttons if user is not logged in
              <>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    to="/signin"
                    className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md transition-colors font-medium"
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg"
                  >
                    Signup
                  </Link>
                </motion.div>
              </>
            )}
            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.1 }} className="md:hidden">
              <Menu className="h-6 w-6 cursor-pointer text-gray-700" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;