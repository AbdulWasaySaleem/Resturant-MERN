import jwt from "jsonwebtoken";

//verifyToken
export const verifyToken = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(403).json({ msg: "Not authorizated No token" });

  if (
    req.headers.authorization &&
    req.headers.authorization.startwith("Bearer ")
  ) {
    const token = req.header.split(" ")[1];
    jwt.verify(token, "14326wasay14326", (err, data) => {
      if (err) return res.status(403).json({ msg: "Wrong/expire token" });
      else {
        req.user = data;
        next();
      }
    });
  }
};

//verifyToken Admin
export const verifyTokenAdmin = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(403).json({ msg: "Not authorizated No token" });

  if (
    req.headers.authorization &&
    req.headers.authorization.startwith("Bearer ")
  ) {
    const token = req.header.split(" ")[1];
    jwt.verify(token, "14326wasay14326", (err, data) => {
      if (err) return res.status(403).json({ msg: "Wrong/expire token" });
      else {
        //data = {id:user._id, isAdmin:user.isAdmin}
        if (!data.isAdmin) return res.status(403).json({ msg: "You're not admin" });
        req.user = data;
        next();
      }
    });
  }
};
