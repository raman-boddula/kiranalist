const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

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

userSchema.pre("save", function (next) {
  if (!this.isModified("Password")) return next();
  bcrypt.hash(this.Password, 10, (err, hash) => {
    console.log("Password", this.Password);
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
