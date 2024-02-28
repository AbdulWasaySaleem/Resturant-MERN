import User from "../Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const registerController = async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // Exclude password field from the response
    const { password, ...userWithoutPassword } = newUser.toObject();

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      "14326wasay14326",
      { expiresIn: "5h" }
    );

    // Return success response
    res.status(201).json({
      user: userWithoutPassword,
      token,
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error with Register Controller:", error);
    res.status(500).json({
      success: false,
      message: "Error with Register Controller",
      error: error.message,
    });
  }
};

export const loginController = async(req,res)=>{
  try {
    const user = await User.findOne({email:req.body.email})
    if(!user){
      return res.send({
        message:"User Not Register"
      })
    }
    //password
    const comparePass = await bcrypt.compare(req.body.password, user.password)
    if(!comparePass){
      return res.send({
        message:"Incorrect Password"
      })
    }
    
    // Exclude password field from the response
    const { password, ...userWithoutPassword } = user.toObject();
    //generating token
    const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, "14326wasay14326", {expiresIn:'5h'})
    return res.status(200).send({
      user: userWithoutPassword,
      token,
      success: true,
      message: "User registered successfully",
    })

  } catch (error) {
    console.error("Error with Login Controller:", error);
    res.status(500).json({
      success: false,
      message: "Error with Login Controller",
      error: error.message,
    });
  }
}