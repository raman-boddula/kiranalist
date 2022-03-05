const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

const { createClient } = require("redis");

const redis = createClient();

redis.connect();

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
  redis.on("error", (err) => console.log("Redis Client Error", err));
  try {
    const page = +req.query.Page || 1;
    const size = +req.query.size || 6;
    const offset = (page - 1) * size;
    let product = JSON.parse(await redis.get("products"));
    if (product) {
      // console.log("hello", product, product.length);
      const total_pages = Math.ceil(product.length / size);
      if (page == 1) {
        try {
          let pagee = JSON.parse(await redis.get("page1"));
          if (pagee) {
            res.status(200).json({ products: pagee, total_pages: total_pages });
          } else {
            let page1 = [];
            for (let i = 0; i < size; i++) {
              page1.push(product[i]);
            }
            redis.set("page1", JSON.stringify(page1));
            res.status(200).json({ products: page1, total_pages: total_pages });
          }
        } catch (e) {
          res.status(404).json({ message: e.message, status: "Failed" });
        }
      } else if (page == 2) {
        try {
          let pagee = JSON.parse(await redis.get("page2"));
          if (pagee) {
            res.status(200).json({ products: pagee, total_pages: total_pages });
          } else {
            let page2 = [];
            for (let i = size; i < 2 * size; i++) {
              page2.push(product[i]);
            }
            redis.set("page2", JSON.stringify(page2));
            res.status(200).json({ products: page2, total_pages: total_pages });
          }
        } catch (e) {
          res.status(404).json({ message: e.message, status: "Failed" });
        }
      } else if (page == 3) {
        try {
          let pagee = JSON.parse(await redis.get("page3"));
          if (pagee) {
            res.status(200).json({ products: pagee, total_pages: total_pages });
          } else {
            let page3 = [];
            for (let i = size * 2; i < 3 * size; i++) {
              page3.push(product[i]);
            }
            redis.set("page3", JSON.stringify(page3));
            res.status(200).json({ products: page3, total_pages: total_pages });
          }
        } catch (e) {
          res.status(404).json({ message: e.message, status: "Failed" });
        }
      } else if (page == 4) {
        try {
          let pagee = JSON.parse(await redis.get("page4"));
          if (pagee) {
            res.status(200).json({ products: pagee, total_pages: total_pages });
          } else {
            let page4 = [];
            for (let i = size * 3; i < product.length; i++) {
              page4.push(product[i]);
            }
            redis.set("page4", JSON.stringify(page4));
            res.status(200).json({ products: page4, total_pages: total_pages });
          }
        } catch (e) {
          res.status(404).json({ message: e.message, status: "Failed" });
        }
      }
    } else {
      product = await Product.find().skip(offset).limit(size).lean().exec();
      const total_pages = Math.ceil(
        (await Product.find().countDocuments()) / size
      );
      res.status(200).json({ products: product, total_pages: total_pages });
    }
  } catch (e) {
    res.status(404).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
