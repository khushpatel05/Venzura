import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Sending request to send OTP to:', email); // Debugging
  
    try {
      const response = await fetch('http://localhost:4000/api/auth/send-otp-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      console.log('Response status:', response.status); // Debugging
  
      const data = await response.json();
  
      if (response.ok) {
        setMessage(data.message); // Show success message
        setError('');
        navigate('/otp', { state: { email } }); // Redirect to the OTP page with email
      } else {
        setError(data.message || 'Something went wrong'); // Show backend error message
        setMessage('');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error); // Debugging
      setError('Something went wrong. Please try again.'); // Show generic error message
      setMessage('');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Forgot Password</h2>
        <p className="text-gray-600 mb-8">
          Enter your email address to receive an OTP.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-gray-50 rounded-lg py-3 px-4 pl-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">✉️</span>
          </div>

          {/* Success Message */}
          {message && (
            <p className="text-green-500 text-sm mt-1">{message}</p>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Send OTP
          </button>

          {/* Back to Sign In Link */}
          <div className="text-center mt-4">
            <p className="text-gray-600">Remember your password?</p>
            <Link
              to="/signin"
              className="text-blue-600 hover:underline font-semibold"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;