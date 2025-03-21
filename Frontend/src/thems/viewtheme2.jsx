import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ViewTheme2 = () => {
  // State to manage the main image
  const [mainImage, setMainImage] = useState(
    'https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481469.jpg'
  );

  // Array of small images
  const smallImages = [
    'https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481469.jpg',
    'https://cdn.create.vista.com/api/media/small/640201796/stock-photo-india-wedding-event-stage-decorated-flower-chair-light',
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
                alt="Wedding Theme"
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
                  alt={`Wedding Theme Preview ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Detailed Information Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Wedding Theme</h3>
            <p className="text-gray-700 mb-6">
              Celebrate your special day with our exclusive Wedding Theme. Perfect for creating unforgettable memories, our theme includes elegant decorations, personalized setups, and a magical experience. Whether it's a traditional wedding or a modern celebration, we ensure a day filled with love and joy.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Theme Includes:</strong>
              <ul className="list-disc list-inside mt-2">
                <li>Elegant decorations (floral arrangements, lighting, and drapery)</li>
                <li>Customized stage and seating arrangements</li>
                <li>Personalized wedding cake and dessert setup</li>
                <li>Photo booth with props for capturing memories</li>
                <li>Music and sound arrangements for ceremonies and receptions</li>
                <li>Dedicated wedding planner for seamless execution</li>
              </ul>
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Additional Services:</strong>
              <ul className="list-disc list-inside mt-2">
                <li>Catering options (vegetarian, non-vegetarian, and international cuisines)</li>
                <li>Entertainment packages (live bands, DJs, or cultural performances)</li>
                <li>Custom theme requests to match your vision</li>
              </ul>
            </p>
            <div className="mt-6">
              <div className="flex items-center text-gray-700">
                <span className="font-bold">Total Amount With Theme is: ₹1,50,000</span>
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

export default ViewTheme2;