const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

// const redis = require("../configs/redis");

// redis.connect();

router.post("/", async (req, res) => {
  redis.on("error", (err) => console.log("Redis Client Error", err));
  try {
    const product = await Product.create(req.body);
    const allProducts = await Product.find().lean().exec();
    redis.set("products", JSON.stringify(allProducts));
    res.status(201).json({ product });
  } catch (e) {
    res.status(404).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  // redis.on("error", (err) => console.log("Redis Client Error", err));
  try {
    const page = +req.query.Page || 1;
    const size = +req.query.size || 6;
    const offset = (page - 1) * size;
    const product = await Product.find().skip(offset).limit(size).lean().exec();
    const total_pages = Math.ceil(
      (await Product.find().countDocuments()) / size
    );
    res.status(200).json({ products: product, total_pages: total_pages });
  } catch (e) {
    res.status(404).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
