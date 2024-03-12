import express from "express";
import {
  getAllUserController,
  loginController,
  registerController,
  toggleAdminController,
  //toggleAdminController,
} from "../controllers/authController.js";
import { verifyTokenAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

//APIS
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/allusers", verifyTokenAdmin, getAllUserController);
router.patch("/users/toggle/:id", verifyTokenAdmin, toggleAdminController);

//exporting
export default router;
