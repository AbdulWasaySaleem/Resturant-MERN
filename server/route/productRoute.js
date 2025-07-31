import express from "express";
import { verifyTokenAdmin } from "../middleware/verifyToken.js";
import {
  createProductController,
  deleteProductController,
  getAllProductCategoryController,
  getAllproductController,
  getOneProductController,
  updateProductController,
} from "../controllers/productController.js";
import upload from "../config/multer.js";

const router = express.Router();

//APIS
//@GET || Get All Product by Category
router.get("/", getAllProductCategoryController);

//@GET || Get One Product
router.get("/find/:id", getOneProductController);

//@POST || Create Product with multer & cloudinary file handeling
router.post(
  "/create",
  verifyTokenAdmin,
  upload.single("image"),
  createProductController
);

//@GET || Get All Products
router.get("/alldata", getAllproductController);

//@PATCH || Update Product
router.patch("/update/:id", verifyTokenAdmin, upload.single("image"), updateProductController);

//@DELETE || Delete Product
router.delete("/:id", verifyTokenAdmin, deleteProductController);

//exporting
export default router;
