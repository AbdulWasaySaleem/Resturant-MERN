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
    maxlength: 200 // Maximum length for password
  },
  address:{
    type: String,
    required: true,
    minlength: 3, // Minimum length for password
    maxlength: 200 // Maximum length for password
  },
  isAdmin: {
    type: Boolean,
    default: false // Default value for isAdmin is false
  },
  isDemoAdmin:{
    type: Boolean,
    default: false // Default value for isDemoAdmin is false
  }
});

// Create and export the User model
const User = mongoose.model('User', userSchema);

export default User;
