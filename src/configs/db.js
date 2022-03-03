const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => {
  mongoose.connect(
    `mongodb+srv://vasukomuravelli:${process.env.MONGOPASSWORD}@cluster0.t3wyf.mongodb.net/test`
  );
};
