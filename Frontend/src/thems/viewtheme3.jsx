import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ViewTheme3 = () => {
  // State to manage the main image
  const [mainImage, setMainImage] = useState(
    'https://d3gzwr12tvi9b5.cloudfront.net/wp-content/uploads/2023/10/Cocomelon-Theme-Birthday-Decoration-In-Party-Hall-004-jpg.webp'
  );

  // Array of small images
  const smallImages = [
    'https://d3gzwr12tvi9b5.cloudfront.net/wp-content/uploads/2023/10/Cocomelon-Theme-Birthday-Decoration-In-Party-Hall-004-jpg.webp',
    'https://www.hamaraevent.com/uploads/blog/0021069001463049256.jpg',
    'https://theacresclub.com/wp-content/uploads/2024/01/5-Fantastic-Kids-Birthday-Party-Theme-Ideas-Image.jpg',
    'https://cdn0.weddingwire.in/vendor/5824/3_2/960/jpeg/whatsapp-image-2023-12-06-at-2-21-35-pm-1_15_135824-170194041724437.jpeg',
  ];

  // Function to handle small image click
  const handleSmallImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-6 py-8 flex flex-col items-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl space-y-8"
        >
          {/* Main Image Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative overflow-hidden">
              <img
                src={mainImage}
                alt="Festival & Cultural Celebration Theme"
                className="w-full h-[390px] object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>

          {/* Small Images Gallery */}
          <div className="flex justify-center space-x-4">
            {smallImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
                onClick={() => handleSmallImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Festival Theme Preview ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Detailed Information Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Festival & Cultural Celebration Theme</h3>
            <p className="text-gray-700 mb-6">
              Celebrate the richness of culture and tradition with our exclusive Festival & Cultural Celebration Theme. Perfect for festivals, cultural events, and religious celebrations, our theme includes vibrant decorations, traditional setups, and a memorable experience. Whether it's Diwali, Eid, Christmas, or a cultural fair, we ensure a joyful and authentic celebration.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Theme Includes:</strong>
              <ul className="list-disc list-inside mt-2">
                <li>Traditional and cultural decorations (rangoli, lights, and floral arrangements)</li>
                <li>Customized stage and seating arrangements</li>
                <li>Traditional food and dessert setups</li>
                <li>Photo booth with cultural props for memorable pictures</li>
                <li>Music and sound arrangements for cultural performances</li>
                <li>Dedicated event coordinator for seamless execution</li>
              </ul>
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Additional Services:</strong>
              <ul className="list-disc list-inside mt-2">
                <li>Catering options (traditional and regional cuisines)</li>
                <li>Entertainment packages (folk dances, cultural performances, or live music)</li>
                <li>Custom theme requests to match your festival or cultural event</li>
              </ul>
            </p>
            <div className="mt-6">
              <div className="flex items-center text-gray-700">
                <span className="font-bold">Total Amount With Theme is: ₹75,000</span>
                <span className="text-gray-500 ml-1">per day</span>
              </div>
            </div>
          </div>

          {/* Book Now Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-xl font-medium shadow-md hover:bg-gray-800 transition-colors duration-300"
              >
                <Link to="/booking">Book Now</Link>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ViewTheme3;