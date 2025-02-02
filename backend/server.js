const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Load .env file

console.log("Mongo URI:", process.env.MONGO_URI);  // Check if the URI is loaded correctly

const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mrkhiladi:Mrkhiladi%40123@cluster0.mongodb.net/profile-app?retryWrites=true&w=majority', {

      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

// Call connectDB function
connectDB();

// Sample route
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
