const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN ?? "1500s"
  });
};

module.exports = createToken;
