import express from 'express'
import  {loginController, registerController}  from '../controllers/authController.js'



const router = express.Router()

//APIS
router.post("/register", registerController)
router.post("/login", loginController)


//exporting
export default router