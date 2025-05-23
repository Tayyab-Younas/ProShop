import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc  Create new orders
// @route Post /api/order
// @access  Private

const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

// @desc  Get logged in user orders
// @route Get /api/order/myorders
// @access  Private

const getMyOrders = asyncHandler(async (req, res) => {
  res.send("Get my orders");
});

// @desc  Get order by ID
// @route Get /api/order/:id
// @access  Private

const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// @desc  Update order to paid
// @route Get /api/order/:id/pay
// @access  Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("Update order to paid");
});

// @desc  Update order to delivered
// @route Get /api/order/:id/deliver
// @access  Private/Admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("Update order to delivered");
});

// @desc  Get all order
// @route Get /api/order
// @access  Private/Admin

const getOrders = asyncHandler(async (req, res) => {
  res.send("Get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
