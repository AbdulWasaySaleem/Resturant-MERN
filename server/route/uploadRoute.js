//for image uplaods
import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import multer from "multer";

const router = express.Router();

//multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename);
  },
});
const upload = multer({ storage });

router.post("/image", verifyToken, upload.single("image"), (req, res) => {
  try {
    return res.status(201).json({ msg: "Sucessfully uploaded file" });
  } catch (error) {
    console.log("error on upladRoute", error);
  }
});

export default router;
