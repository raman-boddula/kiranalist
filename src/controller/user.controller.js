const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).send({ registeredUser: user });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    res.status(200).send({ allUsers: user });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    res.status(200).send({ singleUser: user });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(200).send({ modifiedUser: user });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    res.status(200).send({ deleUser: user });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
});
