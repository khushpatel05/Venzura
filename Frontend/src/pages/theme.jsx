import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

const Venue = () => {
  // Sample venue data
  const venues = [
    {
      id: 1,
      name: 'Birthday Party Theme',
      price: '₹15,000',
      image: 'https://storage.googleapis.com/shy-pub/337348/SKU-1476_3-1715413847639.jpg',
    },
    {
      id: 2,
      name: 'Wedding Theme',
      price: '₹18,000',
      image: 'https://img.staticmb.com/mbcontent/images/uploads/2023/8/Heaven_4.jpg',
    },
    {
      id: 3,
      name: 'Festival & Cultural Celebration Themes ',
      price: '₹25,000',
      image: 'https://wp-media-partyslate.imgix.net/2022/12/austin-powers-21st-birthday-party-in-surrey-uk_1918020.jpg?auto=compress%2Cformat&ixlib=php-3.3.1',
    },
    {
      id: 4,
      name: ' Kids & Fun Party Themes',
      price: '₹30,000',
      image: 'https://www.hamaraevent.com/uploads/blog/0021069001463049256.jpg',
    },
    {
      id: 5,
      name: 'Corporate & Formal Event Themes',
      price: '₹22,000',
      image: 'https://www.peerspace.com/resources/wp-content/uploads/nyc-Spacious-Luxury-Ballroom.webp',
    },
  ];

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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Venue Listings */}
      <main className="flex-grow px-6 py-8 flex flex-col items-center bg-gray-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl space-y-8"
        >
          {venues.map((venue) => (
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
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold mb-2">{venue.name}</h3>
                  </div>

                  <div className="mt-6">
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
                    {/* Update the Link to point to the correct route */}
                    <Link to={`/viewtheme${venue.id}`}>View</Link>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
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