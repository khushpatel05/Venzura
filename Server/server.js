const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const { exec } = require('child_process');
const clubRoutes = require('./routes/clubRoutes'); 

require('dotenv').config(); 

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies (alternative to express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api', userRoutes); // User routes
app.use('/api', clubRoutes);
// Function to kill the process using port 4000
const killPortProcess = () => {
  return new Promise((resolve, reject) => {
    const command = process.platform === 'win32'
      ? `netstat -ano | findstr :4000`
      : `lsof -i :4000`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log('No process found using port 4000.');
        return resolve();
      }

      const lines = stdout.split('\n').filter(line => line.trim() !== '');
      const pid = process.platform === 'win32'
        ? lines[0].split(' ').pop()
        : lines[1].split(/\s+/)[1];

      if (pid) {
        console.log(`Killing process with PID ${pid} using port 4000...`);
        exec(process.platform === 'win32' ? `taskkill /PID ${pid} /F` : `kill -9 ${pid}`, (err) => {
          if (err) {
            console.error('Failed to kill process:', err);
            return reject(err);
          }
          console.log(`Process with PID ${pid} killed successfully.`);
          resolve();
        });
      } else {
        resolve();
      }
    });
  });
};

// Start the server
const PORT = process.env.PORT || 4000;

killPortProcess()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
  });