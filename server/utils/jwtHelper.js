import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (userId, isAdmin) => {
  return jwt.sign({ id: userId, isAdmin }, process.env.JWT_SECRETE, {
    expiresIn: "5h",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRETE);
};
