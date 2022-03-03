const mongoose = require("mongoose");
const express = require("express");

const productSchema = new mongoose.Schema(
  {
    Name: { type: "string", required: true },
    Image: [{ type: "string", required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
