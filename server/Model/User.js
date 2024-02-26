import mongoose from 'mongoose';

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum length for password
    maxlength: 20 // Maximum length for password
  },
  isAdmin: {
    type: Boolean,
    default: false // Default value for isAdmin is false
  }
});

// Create and export the User model
const User = mongoose.model('User', userSchema);

export default User;
