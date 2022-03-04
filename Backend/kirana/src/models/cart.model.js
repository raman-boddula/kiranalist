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
    product_list: [{ type: String, required: true }],
    date_of_purchase: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("cart", cartSchema);
