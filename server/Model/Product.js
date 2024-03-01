import mongoose from "mongoose";

// Define the Product Schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 4, // Minimum length for the title
  },
  description: {
    type: String,
    required: true,
    minlength: 8, // Minimum length for the description
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  review: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

// Create and export the Product model
const Product = mongoose.model("Product", productSchema);

export default Product;
