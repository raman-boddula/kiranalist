const express = require("express");

const app = express();

app.use(express.json());

const { register } = require("./controller/Auth.controller");

app.use("/register", register);

module.exports = app;
