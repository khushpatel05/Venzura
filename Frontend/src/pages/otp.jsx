import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function OTP() {
  const [otp, setOTP] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; // Get email from state

  const handleVerifyOTP = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/auth/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
      setError('');
      // Redirect to reset password page with the token
      navigate('/reset-password', { state: { token: data.token } })// Assuming the server sends the token in the response
    } else {
      setError(data.message || 'Invalid OTP');
      setMessage('');
    }
  } catch (error) {
    setError('Something went wrong. Please try again.');
    setMessage('');
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">OTP Verification</h2>
        <p className="text-gray-600 mb-8">
          Enter the OTP sent to your email.
        </p>

        <div className="space-y-6">
          {/* OTP Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="OTP"
              className="w-full bg-gray-50 rounded-lg py-3 px-4 pl-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔢</span>
          </div>

          {/* Success Message */}
          {message && (
            <p className="text-green-500 text-sm mt-1">{message}</p>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}

          {/* Verify OTP Button */}
          <button
            type="button"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            onClick={handleVerifyOTP}
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
}

export default OTP;