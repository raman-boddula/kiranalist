const mongoose = require("mongoose");
const express = require("express");

const productSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Image: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
