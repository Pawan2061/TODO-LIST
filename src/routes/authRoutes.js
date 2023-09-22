const express = require("express");
const router = express.Router();
const { register, login, getUsers } = require("../controller/userController");

router.post("/signup", register);
router.post("/login", login);
router.get("/getUsers", getUsers);

module.exports = router;
