import express from 'express'
import { verifyToken, verifyTokenAdmin } from '../middleware/verifyToken.js'
import { createProductController, getAllProductController, getOneProductController } from '../controllers/productController.js'


const router = express.Router()

//APIS
//get All
router.get("/",verifyToken, getAllProductController)
//getone
router.get("/find/:id", verifyToken, getOneProductController)
//craete 
router.post("/create",verifyTokenAdmin, createProductController)

//exporting
export default router