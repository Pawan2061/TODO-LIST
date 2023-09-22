const express = require("express");
const router = express.Router();
const ToDolistValidator = require("../middleware/listValidator");

const {
  addActivity,
  showActivity,
  updateActivity,
} = require("../controller/ActivityController");

router.post("/addActivity", ToDolistValidator, addActivity);

router.get("/showActivity", ToDolistValidator, showActivity);
router.put("/updateActivity/:id", ToDolistValidator, updateActivity);

module.exports = router;
