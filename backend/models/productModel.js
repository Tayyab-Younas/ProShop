import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },

    name: {
      type: String,
      require: true,
    },

    rating: {
      type: Number,
      require: true,
    },

    comment: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const prodocutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },

    name: {
      type: String,
      require: true,
    },

    image: {
      type: String,
      require: true,
    },

    brand: {
      type: String,
      require: true,
    },

    category: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      require: true,
    },

    reviews: [reciewsSchema],
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      require: true,
      default: 0,
    },

    price: {
      type: Number,
      require: true,
      default: 0,
    },

    countInStock: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.Schema("product", prodocutSchema);
