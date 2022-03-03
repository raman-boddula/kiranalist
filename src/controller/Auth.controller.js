const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWTKEY);
};
const register = async (req, res) => {
  try {
    let user = await User.findOne({ Email: req.body.Email }).lean().exec(); // checking if user is already registered
    if (user) {
      return res
        .status(400)
        .json({ message: "Please use different email address" }); // If user exist returning error
    }
    user = await User.create(req.body); //If user not exists then creating
    token = newToken(user); //Generating a token for the user
    res.status(201).json({ user, token });
  } catch (e) {
    res.status(404).json({ message: e.message, status: "Failed" });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ Email: req.body.Email }); // checking if user is already registered
    if (!user) {
      return res
        .status(404)
        .json({ message: "Please use a valid email or password" }); // If user not exist then throwing an error
    }
    const match = user.checkPassword(req.body.Password);
    if (!match) {
      return res
        .status(404)
        .json({ message: "Please use a valid email or password" }); // If user password does not match throwing an error
    }
    const token = newToken(user); // Creating a token for the user to access after login
    res.status(201).json({ user, token });
  } catch (e) {
    res.status(404).json({ message: e.message, status: "Failed" });
  }
};

module.exports = { register, login };
