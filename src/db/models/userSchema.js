const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter your name"],
  },
  email: {
    type: String,
    required: [true, "Enter your email"],
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (error) {
      return next(error);
    }
  }
});
userSchema.statics.login = async function (email, password) {
  const company = await this.findOne({ email });
  if (!company) {
    throw Error("Incorrect email");
  }
  const auth = await bcrypt.compare(password, company.password);
  if (auth) {
    return company;
  }
  throw Error("Incorrect password");
};

const User = mongoose.model("User", userSchema);

module.exports = User;
