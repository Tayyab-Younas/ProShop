import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc  Login user
// @route Post /api/user/login
// @access  Public
const logInUser = asyncHandler(async (req, res) => {
  res.send("login User");
});

// @desc  Register user
// @route Post /api/user
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  res.send("register User");
});

// @desc  Logout user / clear cookie
// @route Post /api/user/logout
// @access  Private

const logOutUser = asyncHandler(async (req, res) => {
  res.send("logout User");
});

// @desc  Get user profile
// @route Get /api/user/profile
// @access  private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get User profile");
});

// @desc  update user profile
// @route  Put /api/user/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update User profile");
});

// @desc  Get users
// @route Get /api/users/:id
// @access  Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send("get Users");
});


// @desc  Get user by ID
// @route Get /api/users/:id
// @access  Private/Admin

const getUserByID = asyncHandler(async (req, res) => {
  res.send("get User by Id");
});



// @desc  Delete user
// @route Delete /api/users/:id
// @access  Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete User");
});

// @desc  Update user
// @route Put /api/users/:id
// @access  Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  res.send("update User");
});

export {
  logInUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
};
