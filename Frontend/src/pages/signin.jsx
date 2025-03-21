import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Slack, Globe, Users, Calendar, Star } from 'lucide-react';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({}); // State to store validation errors
  const navigate = useNavigate(); // Hook for navigation

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
  
    try {
      // Send the form data to the backend for authentication
      const response = await fetch('http://localhost:4000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Save the authentication token (e.g., JWT) in localStorage
        localStorage.setItem('token', data.token);
  
        // Redirect to the Home page
        navigate('/home');
      } else {
        // Handle backend validation errors
        if (response.status === 400 && data.errors) {
          const backendErrors = {};
          data.errors.forEach((err) => {
            backendErrors[err.path[0]] = err.message;
          });
          setErrors(backendErrors); // Set backend validation errors
        } else {
          setErrors({ server: data.message || 'Invalid email or password' }); // Set server-side error
        }
      }
    } catch (error) {
      setErrors({ server: 'Something went wrong. Please try again.' }); // Handle network errors
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white flex flex-col justify-center">
          <div>
            <Slack size={40} className="mb-6" />
            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg font-light mb-8">
              Sign in to continue exploring the best venues, vibes, and visions.
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>
          <p className="text-gray-600 mb-8">
            Your One-Stop Destination for Venues, Vibes & Visions!
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
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

            {/* Forgot Password Link */}
            <div className="text-right">
               <Link
                 to="/forgot-password"
                 className="text-sm text-gray-600 hover:underline">
                 Forgot your password?
               </Link>
           </div>

            {/* Server Error */}
            {errors.server && (
              <p className="text-red-500 text-sm mt-1">{errors.server}</p>
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>

            {/* Create Account Link */}
            <div className="text-center mt-4">
              <p className="text-gray-600">Don't have an account?</p>
              <Link
                to="/signup"
                className="text-blue-600 hover:underline font-semibold"
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;