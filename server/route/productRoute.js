import express from 'express'
import { verifyToken, verifyTokenAdmin } from '../middleware/verifyToken'
import { createProductController, getAllProductController, getOneProductController } from '../controllers/productController'


const router = express.Router()

//APIS
//get All
router.get("/",verifyToken, getAllProductController)
//getone
router.get("/find/:id", verifyToken, getOneProductController)
//craete 
router.post("/",verifyTokenAdmin, createProductController)

//exporting
export default router