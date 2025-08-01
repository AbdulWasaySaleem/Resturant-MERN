import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (userId, isAdmin, isDemoAdmin) => {
  return jwt.sign(
    { id: userId, isAdmin, isDemoAdmin },
    process.env.JWT_SECRETE,
    {
      expiresIn: "30d",
    }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRETE);
};
