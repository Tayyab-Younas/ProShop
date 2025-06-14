import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

//protect
const protect = asyncHandler(async (req, res, next) => {
  let token;

  //read the jwt from cookie
  token = req.cookies.jwt;
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decode.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);

      res.status(401);
      throw new Error("Not authorized , Token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized , No Token");
  }
});

//admin middleware

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as Admin");
  }
};

export { protect, admin };
