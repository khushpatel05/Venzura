import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = location.state || {}; // Get the token from location state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Check if the token is present
    if (!token) {
      setError('Invalid or missing token. Please try again.');
      return;
    }

    try {
      // Send a POST request to reset the password
      const response = await fetch('http://localhost:4000/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }), // Include token in the request body
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Show success message
        setError('');
        setTimeout(() => {
          navigate('/signin'); // Redirect to the sign-in page after a delay
        }, 3000);
      } else {
        setError(data.message || 'Something went wrong');
        setMessage('');
      }
    } catch (error) {
      console.error('Error in reset password:', error); // Debugging
      setError('Something went wrong. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reset Password</h2>
        <p className="text-gray-600 mb-8">
          Enter your new password below.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="New Password"
              className="w-full bg-gray-50 rounded-lg py-3 px-4 pl-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6} // Minimum password length
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔒</span>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              className="w-full bg-gray-50 rounded-lg py-3 px-4 pl-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6} // Minimum password length
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔒</span>
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
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;