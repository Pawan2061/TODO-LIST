const mongosoose = require("mongoose");

const activitySchema = mongosoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 500,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const activities = mongosoose.model("Activities", activitySchema);

module.exports = activities;
