import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import Products from "./data/products.js";
import connectDB from "./config/db.js";
import product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import User from "./models/userModel.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = Products.map((product) => {
      return { ...product, user: adminUser };
    });

    await product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);

    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const dataDestroy = async () => {
  try {
    await Order.deleteMany();
    await product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroy".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
