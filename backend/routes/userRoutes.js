import express from "express";
const router = express.Router();
import {
  logInUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/logInMiddleware.js";

router.route("/").post(registerUser).get( protect, admin , getUsers);

router.post("/logout", logOutUser);
router.post("/login", logInUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/:id").delete( protect, admin , deleteUser).get( protect, admin , getUserByID).put(protect, admin , updateUser);

export default router;
