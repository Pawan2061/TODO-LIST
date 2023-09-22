// const bcrypt = require("bcrypt");
const User = require("../db/models/userSchema");
const createtoken = require("../middleware/createToken");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("All fields are mandatory");
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: password,
    });

    await newUser.save();

    const payload = { email: email, password: password };
    const token = createtoken(payload);
    const newPayload = {
      email: email,
      Token: token,
    };
    res.status(200).send(newPayload);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const payload = { email: email, password: password };
    const token = createtoken(payload);

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  const users = await User.find();
  try {
    if (!users) {
      res.status(400).send("this user dont exists");
    }

    res.status(200).send(users);
  } catch (error) {
    res.status(403).send(error.message);
  }
};

module.exports = {
  register,
  login,
  getUsers,
};
