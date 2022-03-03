const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(200).json({
      cartItem: cart,
    });
  } catch (err) {
    res.status(400).json({ Status: "Failed", error: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find()
      .populate("product_id")
      .populate("user_id")
      .lean()
      .exec();
    res.status(200).json({
      cartItems: cart,
    });
  } catch (err) {
    res.status(400).json({ Status: "Failed", error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id)
      .populate("product_id")
      .populate("user_id")
      .lean()
      .exec();
    res.status(200).json({
      cartItem: cart,
    });
  } catch (err) {
    res.status(400).json({ Status: "Failed", error: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(200).json({
      modifiedCartItem: cart,
    });
  } catch (err) {
    res.status(400).json({ Status: "Failed", error: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).json({
      deletedCartItem: cart,
    });
  } catch (err) {
    res.status(400).json({ Status: "Failed", error: err.message });
  }
});

module.exports = router;
