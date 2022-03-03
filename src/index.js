const express = require("express");

const app = express();

app.use(express.json());

const { register, login } = require("./controller/Auth.controller");

const ProductController = require("./controller/Product.controller");

const cartController = require("./controller/cart.controller");

app.use("/register", register);
app.use("/login", login);

app.use("/products", ProductController);

app.use("/cart", cartController);

module.exports = app;
