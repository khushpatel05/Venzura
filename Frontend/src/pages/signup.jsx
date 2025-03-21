import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slack, Globe, Users, Calendar, Star } from 'lucide-react';
import { z } from 'zod';

// Zod schema for sign-up form validation
const signUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long' })
    .max(20, { message: 'Username cannot exceed 20 characters' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' }),
  mobileNumber: z
    .string()
    .min(10, { message: 'Mobile number must be at least 10 digits' })
    .max(15, { message: 'Mobile number cannot exceed 15 digits' })
    .regex(/^\d+$/, { message: 'Mobile number must contain only digits' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .max(30, { message: 'Password cannot exceed 30 characters' }),
});

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({}); // State to store validation errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the current field when the user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Clear previous errors
    setErrors({});
  
    // Validate the form data using Zod on the frontend
    try {
      signUpSchema.parse(formData); // Frontend validation
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
        const errorMessages = {};
        error.errors.forEach((err) => {
          errorMessages[err.path[0]] = err.message;
        });
        setErrors(errorMessages); // Set validation errors
        return; // Stop further execution if frontend validation fails
      }
    }
  
    // If frontend validation passes, submit the form data to the backend
    try {
      const response = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        navigate('/signin'); // Redirect to the Sign In page
      } else {
        // Handle backend validation errors
        if (response.status === 400 && data.errors) {
          const backendErrors = {};
          data.errors.forEach((err) => {
            backendErrors[err.path[0]] = err.message;
          });
          setErrors(backendErrors); // Set backend validation errors
        } else {
          setErrors({ server: data.message }); // Set server-side error
        }
      }
    } catch (error) {
      setErrors({ server: 'Something went wrong' }); // Handle network errors
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white flex flex-col justify-center">
          <div>
            <Slack size={40} className="mb-6" />
            <h1 className="text-4xl font-bold mb-4">Join Us!</h1>
            <p className="text-lg font-light mb-8">
              Start your journey with us and explore the best venues, vibes, and visions.
            </p>

            {/* Additional Design Elements */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Globe size={24} className="text-white" />
                <p className="text-lg font-light">Discover global venues</p>
              </div>
              <div className="flex items-center space-x-4">
                <Users size={24} className="text-white" />
                <p className="text-lg font-light">Connect with hosts and musicians</p>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar size={24} className="text-white" />
                <p className="text-lg font-light">Easy booking and scheduling</p>
              </div>
              <div className="flex items-center space-x-4">
                <Star size={24} className="text-white" />
                <p className="text-lg font-light">Exclusive perks and rewards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h2>
          <p className="text-gray-600 mb-8">
            Your One-Stop Destination for Venues, Vibes & Visions!
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="relative">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full bg-gray-50 rounded-lg py-3 px-4 pl-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.username}
                onChange={handleChange}
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">👤</span>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-gray-50 rounded-lg py-3 px-4 pl-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">✉️</span>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mobile Number Field */}
            <div className="relative">
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                className="w-full bg-gray-50 rounded-lg py-3 px-4 pl-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">📱</span>
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-gray-50 rounded-lg py-3 px-4 pl-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔒</span>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Server Error */}
            {errors.server && (
              <p className="text-red-500 text-sm mt-1">{errors.server}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;