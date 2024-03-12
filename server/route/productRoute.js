import express from "express";
import { verifyToken, verifyTokenAdmin } from "../middleware/verifyToken.js";
import {
  createProductController,
  deleteProductController,
  getAllProductController,
  getAllproductController,
  getOneProductController,
  updateProductController,
} from "../controllers/productController.js";

const router = express.Router();

//APIS
//get All
router.get("/", getAllProductController);
//getone
router.get("/find/:id", getOneProductController);
//craete
router.post("/create", verifyTokenAdmin, createProductController); //verifyTokenAdmin,
router.get("/alldata",  getAllproductController);
router.patch("/update/:id", verifyTokenAdmin, updateProductController);
router.delete("/:id",  verifyTokenAdmin, deleteProductController); //verifyTokenAdmin,

//exporting
export default router;
