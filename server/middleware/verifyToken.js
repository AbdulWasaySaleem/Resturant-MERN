import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//verifyToken
export const verifyToken = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(403).json({ msg: "Not authorized. No token" });

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRETE , (err, data) => {
      if (err) return res.status(403).json({ msg: "Wrong/expire token" });
      else {
        req.user = data;
        next();
      }
    });
  } else {
    return res.status(403).json({ msg: "Invalid token format" });
  }
};

//verifyToken Admin
export const verifyTokenAdmin = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(403).json({ msg: "Not authorized. No token" });

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRETE , (err, data) => {
      if (err) return res.status(403).json({ msg: "Wrong/expire token" });
      else {
        //data = {id:user._id, isAdmin:user.isAdmin}
        if (!data.isAdmin) return res.status(403).json({ msg: "You're not admin" });
        req.user = data;
        next();
      }
    });
  } else {
    return res.status(403).json({ msg: "Invalid token format" });
  }
};