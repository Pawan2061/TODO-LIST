const express = require("express");
const router = express.Router();

const listValidator = require("../middleware/listValidator");
const {
  addActivity,
  showActivity,
  updateActivity,
} = require("../controller/ActivityController");

router.post("/addActivity", listValidator, addActivity);

router.get("/showActivity", listValidator, showActivity);
router.put("/updateActivity/:id", listValidator, updateActivity);

module.exports = router;
