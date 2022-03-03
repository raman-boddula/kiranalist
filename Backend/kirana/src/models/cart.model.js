const mongoose = require("mongoose");
const product = require("./product.model");
const user = require("./user.model");

const cartSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: user,
      required: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: product,
      requried: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("cart", cartSchema);
