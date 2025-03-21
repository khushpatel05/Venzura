import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Calendar, MapPin, Music, Star, Phone, Mail, ChevronRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

// Carousel images
const carouselImages = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1724855946379-451f59d45df6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bride",
    image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg",
    quote: "Venzura made our wedding planning so much easier! The venue they recommended was perfect and the coordination was flawless.",
    rating: 5
  },
  {
    id: 2,
    name: "Raj Patel",
    role: "Corporate Event Manager",
    image: "https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg",
    quote: "We've used Venzura for multiple corporate events and they never disappoint. Their attention to detail is exceptional.",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "Birthday Celebrant",
    image: "https://static.vecteezy.com/system/resources/thumbnails/035/832/837/small/ai-generated-beautiful-young-business-woman-portrait-woman-face-smiling-cute-girl-with-long-hair-studio-shot-isolated-on-gray-background-photo.jpg",
    quote: "My 30th birthday celebration was a hit thanks to Venzura! The venue was stunning and everything was perfectly arranged.",
    rating: 4
  }
];

const features = [
  {
    icon: <Calendar className="w-8 h-8 text-purple-500" />,
    title: "Event Planning",
    description: "Comprehensive event planning services for weddings, corporate events, and celebrations"
  },
  {
    icon: <MapPin className="w-8 h-8 text-red-500" />,
    title: "Venue Selection",
    description: "Curated selection of premium venues across multiple locations"
  },
  {
    icon: <Music className="w-8 h-8 text-blue-500" />,
    title: "Entertainment",
    description: "Professional musicians and hosts for your events"
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: "Full Service",
    description: "End-to-end event management and coordination"
  }
];

// Event types
const eventTypes = [
  {
    title: "Weddings",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Make your special day unforgettable"
  },
  {
    title: "Corporate Events",
    image: "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Professional settings for meetings and conferences"
  },
  {
    title: "Birthday Parties",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80",
    description: "Celebrate your birthday in style"
  },
  {
    title: "Social Gatherings",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    description: "Perfect spaces for reunions and get-togethers"
  }
];

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Carousel - Matching original height */}
      <div className="relative">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="h-[600px]">
              <img
                src={image || "/placeholder.svg"}
                alt={`Venue ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Features Section - Matching original spacing */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Why Choose Venzura?
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-4 flex items-center text-purple-600 font-medium">
                <span>Learn more</span>
                <ChevronRight className="w-5 h-5 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Event Types Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Perfect for Any Occasion</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whatever your event, we have the perfect venue for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden h-80"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src={event.image || "/placeholder.svg"} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-white/80 mb-4">{event.description}</p>
                <Link to={`/venue?type=${event.title.toLowerCase()}`}>
                  <motion.button
                    className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Venues
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        className="bg-gray-50 py-16"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                    <img 
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"} 
                      alt={testimonials[currentTestimonial].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-xl italic text-gray-700 mb-6">"{testimonials[currentTestimonial].quote}"</p>
                  <h4 className="text-lg font-semibold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 mx-1 rounded-full ${currentTestimonial === index ? 'bg-purple-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Section - Matching original style */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-500" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>1234567890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>Venzura@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <motion.button
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

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
  );
}

export default Home;
