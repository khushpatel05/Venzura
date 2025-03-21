import React from "react"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const About = () => {
    return (
      <div className="min-h-screen bg-white pb-20">
        {/* Header Section */}
        <div className="pt-20 pb-8 text-center">
          <h1 className="text-[4rem] font-serif mb-0 leading-none tracking-tight">ABOUT</h1>
          <h2 className="text-[3.5rem] font-serif italic leading-none mt-0">the Venzura</h2>
        </div>
  
        {/* Introduction Text */}
        <div className="max-w-3xl mx-auto px-8 mb-16">
          <p className="text-sm leading-relaxed text-gray-800">
            Welcome to Venzura! Your one-stop destination for discovering and booking the perfect party plots and banquet
            halls for weddings, birthdays, and special celebrations etc. We go beyond just venues—Venzura also connects
            you with top decorators and musicians, ensuring your event is not just memorable but truly extraordinary.
          </p>
        </div>
  
        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="h-[400px] relative">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3"
                alt="Elegant banquet hall setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-black text-white p-10 h-[400px] flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">Why Choose us?</h2>
              <p className="text-sm leading-relaxed">
                At Venzura, we take pride in offering a wide selection of venues, ensuring that you find the perfect party
                plot or banquet hall for any occasion, whether it's a wedding, birthday celebration, or a corporate event.
                Our user-friendly platform makes the booking process seamless, allowing you to explore venues, compare
                options, and reserve your preferred location with just a few clicks. We collaborate with verified vendors
                and organizers, ensuring that every listing on our platform meets high standards of quality and
                reliability.
              </p>
            </div>
          </div>
        </div>
  
        {/* How it Works Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-white p-10 h-[400px] flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">How it works?</h2>
              <p className="text-sm leading-relaxed text-gray-800">
                With Venzura, event planning is effortless. Browse and explore venues, decorators, and musicians, compare
                options, and book seamlessly with instant confirmation. From securing the perfect venue to arranging
                stunning decor and live music, we handle the details so you can relax and enjoy a stress-free,
                unforgettable celebration!
              </p>
            </div>
            <div className="h-[400px] relative">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3"
                alt="Beautifully decorated outdoor event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <br />
          <br />
          {/* Footer */}
        </div>
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
                <li><Link to="/venue" className="text-gray-400 hover:text-white">Venues</Link></li>
                <li><Link to="/booking" className="text-gray-400 hover:text-white">Book Now</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
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

      
    )
  }
  
  export default About
  