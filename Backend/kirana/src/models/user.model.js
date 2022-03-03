const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Age: { type: String, required: true },
    Gender: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("Password")) return next();
  bcrypt.hash(this.Password, 10, (err, hash) => {
    this.Password = hash;
    return next();
  });
});

userSchema.methods.checkPassword = function (Password) {
  return new Promise((res, rej) => {
    bcrypt.compare(Password, this.Password, function (err, same) {
      if (err) return rej(err);
      return res(same);
    });
  });
};

module.exports = model("user", userSchema);
