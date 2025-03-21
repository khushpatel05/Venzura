// Server/validator/auth-validator.js
const { z } = require('zod');

// Define the schema for sign-up data
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

// Middleware to validate sign-up data
const validateSignUpData = (req, res, next) => {
  try {
    // Validate the request body against the schema
    signUpSchema.parse(req.body);
    next(); // Proceed to the next middleware/route handler if validation succeeds
  } catch (error) {
    // If validation fails, send a 400 response with the error details
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: error.errors,
    });
  }
};

module.exports = { validateSignUpData };