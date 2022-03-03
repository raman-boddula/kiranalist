const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    Name: { type: "string", required: true },
    Email: { type: "string", required: true, unique: true },
    Password: { type: "string", required: true },
    Age: { type: "number", required: true },
    Gender: { type: "string", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("user", userSchema);

userSchema.pre("save", function (next) {
  if (!this.isModified("Password")) return next();
  bcrypt.hash(this.Password, 10, function (err, hash) {
    if (err) return err;
    this.Password = hash;
    return next();
  });
});

userSchema.methods.checkPassword = function (password) {
  return new Promise((res, rej) => {
    bcrypt.compare(password, this.Password, function (err, same) {
      if (err) return rej(err);
      return res(same);
    });
  });
};
