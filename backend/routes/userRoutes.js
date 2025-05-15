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


router.route("/").post(registerUser).get(getUsers);

router.post("/logout", logOutUser);
router.post("/login" , logInUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUser);


export default router;
