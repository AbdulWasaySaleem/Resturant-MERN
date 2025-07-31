import express from "express";
import { getAllOrders, getUserOrder, getUserOrderConfirm, orderController } from "../controllers/orderController.js";
import { verifyTokenAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

//APIS
router.post('/yourorders' ,orderController)
router.get('/userOrder', getUserOrder)
router.post('/confirmOrder', getUserOrderConfirm)
router.get("/all-order", verifyTokenAdmin, getAllOrders);

//exporting
export default router;
