import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { getUserOrder, getUserOrderConfirm, orderController } from "../controllers/orderController.js";

const router = express.Router();

//APIS
router.post('/yourorders' ,orderController)
router.get('/userOrder', getUserOrder)
router.post('/confirmOrder', getUserOrderConfirm)

//exporting
export default router;
