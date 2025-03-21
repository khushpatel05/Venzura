import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, Search, Star, Calendar, DollarSign } from 'lucide-react';

const Venue = () => {
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredVenues, setFilteredVenues] = useState([]);

  // Sample venue data
  const venues = [
    {
      id: 1,
      name: 'The Grand Thakar',
      location: 'Rajkot',
      type: 'Banquet Hall',
      capacity: 200,
      rating: 4.8,
      price: '₹15,000',
      image: 'https://imagewedz.oyoroomscdn.com/medium/photologue/images/the-grand-thakar-the-grand-thakar-hall-7.jpg',
    },
    {
      id: 2,
      name: 'Vishwa Party Lawns & Banquet Hall',
      location: 'Ishwariya Main Road, Rajkot',
      type: 'Banquet Hall with party plot',
      capacity: 400,
      rating: 4.5,
      price: '₹18,000',
      image: 'https://content.jdmagicbox.com/comp/rajkot/h4/0281px281.x281.230129065318.g5h4/catalogue/vishwa-party-lawns-and-banquet-hall-ishwariya-main-road-rajkot-banquet-halls-uhdmQT39Np.jpg',
    },
    {
      id: 3,
      name: 'Vivah Party Lawns',
      location: 'Mavdi Main Road, Rajkot',
      type: 'Party Plot',
      capacity: 350,
      rating: 4.7,
      price: '₹25,000',
      image: 'https://content3.jdmagicbox.com/comp/rajkot/h6/0281px281.x281.171107152008.v1h6/catalogue/vivah-party-lawns-mavdi-main-road-rajkot-party-lawns-htj72.jpeg',
    },
    {
      id: 4,
      name: 'Saraza | Best Banquet Hall & Restaurant',
      location: 'Kalavad Road, Rajkot',
      type: 'Banquet Hall & Restaurant',
      capacity: 500,
      rating: 4.6,
      price: '₹30,000',
      image: 'https://lh3.googleusercontent.com/p/AF1QipOQIbsQnUIvMH1g4028An2mxgGdP5nNcJCm1oRc=s1360-w1360-h1020',
    },
    {
      id: 5,
      name: 'The Paradise Palace',
      location: 'Near Cosmoplex Cinema, Rajkot',
      type: 'Banquet Hall',
      capacity: 250,
      rating: 4.9,
      price: '₹22,000',
      image: 'https://lh3.googleusercontent.com/p/AF1QipPe9uiKsQK4YKnyIIJbphaGD6HoNl4som0kDsAb=s1360-w1360-h1020',
    },
  ];

  // Filter venues based on search text
  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredVenues([]);
      return;
    }

    const filtered = venues.filter(
      (venue) =>
        venue.name.toLowerCase().includes(searchText.toLowerCase()) ||
        venue.location.toLowerCase().includes(searchText.toLowerCase()) ||
        venue.type.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredVenues(filtered);
  }, [searchText]);

  // Handle search submission
  const handleSearch = () => {
    setShowSuggestions(false);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Display venues based on search or show all
  const displayVenues =
    searchText.trim() !== ''
      ? venues.filter(
          (venue) =>
            venue.name.toLowerCase().includes(searchText.toLowerCase()) ||
            venue.location.toLowerCase().includes(searchText.toLowerCase()) ||
            venue.type.toLowerCase().includes(searchText.toLowerCase()),
        )
      : venues;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Error handling for localStorage
  const saveToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  };

  const getFromLocalStorage = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to read from localStorage:', error);
      return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Search Bar */}
      <div className="py-8 px-6 flex justify-center bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search venues, locations, or types..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={(e) => {
              e.stopPropagation();
              setShowSuggestions(true);
            }}
            className="w-full py-3 px-4 pl-12 pr-24 bg-white rounded-full shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
              className="bg-black text-white px-6 py-2 mr-2 rounded-full text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300"
            >
              Search
            </motion.button>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && searchText.trim() !== '' && filteredVenues.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
            >
              {filteredVenues.slice(0, 5).map((venue) => (
                <motion.div
                  key={venue.id}
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                  className="px-4 py-3 cursor-pointer flex items-center border-b border-gray-100 last:border-b-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchText(venue.name);
                    setShowSuggestions(false);
                  }}
                >
                  <MapPin size={16} className="mr-3 text-gray-500 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{venue.name}</div>
                    <div className="text-xs text-gray-500">
                      {venue.location} • {venue.type}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Venue Listings */}
      <main className="flex-grow px-6 py-8 flex flex-col items-center bg-gray-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl space-y-8"
        >
          {displayVenues.length > 0
            ? displayVenues.map((venue) => (
                <motion.div
                  key={venue.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  }}
                  className="bg-white rounded-2xl p-0 overflow-hidden shadow-lg transition-all duration-300 flex flex-col md:flex-row"
                  style={{ minHeight: '300px' }} // Ensure consistent height
                >
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={venue.image || '/placeholder.svg'}
                      alt={venue.name}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-700 hover:scale-110"
                      style={{ minHeight: '100%', width: '100%' }} // Ensure image takes full space
                    />
                    <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {venue.type}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold mb-2">{venue.name}</h3>
                        <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
                          <Star size={16} className="text-yellow-500 mr-1" />
                          <span className="font-medium">{venue.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center mt-3 text-gray-600">
                        <MapPin size={18} className="mr-2" />
                        <span className="text-base">{venue.location}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center text-gray-700">
                          <Users size={18} className="mr-2 text-gray-500" />
                          <span>
                            <span className="font-medium">{venue.capacity}</span> max capacity
                          </span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="font-medium">{venue.price}</span>
                          <span className="text-gray-500 ml-1">per day</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-white px-8 py-3 rounded-xl font-medium shadow-md hover:bg-gray-800 transition-colors duration-300"
                      >
                        <Link to={`/venuedesign${venue.id}`}>View Details</Link>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            : searchText.trim() !== '' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                  <p className="text-gray-500 text-lg">No venues found matching "{searchText}"</p>
                  <p className="text-gray-400 mt-2">Try adjusting your search terms</p>
                </motion.div>
              )}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Venzura</h3>
              <p className="text-gray-400">
                Your One-Stop Destination for Venues, Vibes & Visions!
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/venue" className="text-gray-400 hover:text-white">Venues</Link></li>
                <li><Link to="/booking" className="text-gray-400 hover:text-white">Book Now</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                >
                  𝕏
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                >
                  📸
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                >
                  💼
                </motion.a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2025 Venzura. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Venue;