import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Model/User';

const auth = express.Router()

//All APis

//Register
auth.post("/register", async(req,res)=>{
  try {
    //check if already exist
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User with this email already exists",
      });
    }
    //hashing password
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    //creating new user
    const newUser = new User.create({ ...req.body, password: hashedPassword})
    const {password, ...others}= newUser._doc
    const token = jwt.sign({id:newUser._id, idAdmin: newUser.isAdmin}, process.env.JWT_SECRETE, {expiresIn:'5h'})
()
    //returning
    res.status(201).json({
      others,
      token,
      success: true,
      message: "User registered successfully",
    });


  } catch (error) {
    return res.status(500).send({
      message:"Error with Register Controller!",
      success: false,
      error
    })
  }

}) 



export default auth;