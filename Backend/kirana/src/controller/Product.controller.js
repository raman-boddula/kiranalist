const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (e) {
    res.status(404).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    res.status(200).json({ product });
  } catch (e) {
    res.status(404).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
