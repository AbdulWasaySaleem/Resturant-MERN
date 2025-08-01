import User from "../Model/User.js";
import bcrypt from "bcrypt";
import {
  successResponse,
  errorResponse,
  handleResponse,
  handleError,
} from "../utils/responseHandler.js";
import { generateToken } from "../utils/jwtHelper.js";

// Register controller
export const registerController = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return errorResponse(res, 400, "User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const { password, ...userWithoutPassword } = newUser.toObject();

    const token = generateToken(newUser._id, newUser.isAdmin);

    return successResponse(
      res,
      201,
      { user: userWithoutPassword, token },
      "User registered successfully"
    );
  } catch (error) {
    return handleError(res, error, "Error with Register Controller");
  }
};

// Login controller
export const loginController = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return errorResponse(res, 404, "User not registered");
    }

    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      return errorResponse(res, 401, "Incorrect password");
    }

    const { password, ...userWithoutPassword } = user.toObject();

    const token = generateToken(user._id, user.isAdmin, user.isDemoAdmin);

    return successResponse(
      res,
      200,
      { user: userWithoutPassword, token },
      "User logged in successfully"
    );
  } catch (error) {
    return handleError(res, error, "Error with Login Controller");
  }
};

// Get all users
export const getAllUserController = async (req, res) => {
  try {
    const users = await User.find();
    return handleResponse(res, 200, users, "Users fetched successfully");
  } catch (error) {
    return handleError(res, error, "Error fetching users");
  }
};

// Toggle isAdmin
export const toggleAdminController = async (req, res) => {
  try {
    const userId = req.params.id;
    if (req.user?.isDemoAdmin) {
      return errorResponse(res, 403, "Demo admin has read-only access");
    }
    const user = await User.findById(userId);

    if (!user) {
      return errorResponse(res, 404, "User not found");
    }

    user.isAdmin = !user.isAdmin;
    await user.save();

    return successResponse(
      res,
      200,
      { isAdmin: user.isAdmin },
      "User isAdmin toggled successfully"
    );
  } catch (error) {
    return handleError(res, error, "Error toggling isAdmin status");
  }
};
