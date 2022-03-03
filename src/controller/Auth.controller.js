const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (e) {
    res.status(404).json({ message: e.message, status: "Failed" });
  }
};

module.exports = { register };
