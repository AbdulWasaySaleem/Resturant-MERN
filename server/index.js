import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./route/authRoute.js";
import productRoute from "./route/productRoute.js";
import orderRoute from "./route/orderRoute.js";
import connectDB from "./config/connectDb.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/auth", authRoute);
app.use("/products", productRoute);
app.use("/order", orderRoute);

const PORT = process.env.PORT;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};

startServer();
