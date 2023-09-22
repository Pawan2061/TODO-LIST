const { findById, findByIdAndUpdate } = require("../db/models/ActivitySchema");
const Activities = require("../db/models/ActivitySchema");

const addActivity = async (req, res) => {
  const { name, description, done } = req.body;
  try {
    if (!name || !description || !done) {
      res.status(404).send("NOT a valid information");
    }

    const Activity = await new Activities(req.body);

    const newActivity = await Activity.save();
    res.status(200).send(newActivity);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const showActivity = async (req, res) => {
  try {
    const activities = await Activities.find();
    if (!activities) {
      res.status(403).send("No activites found");
    }

    res.status(200).send(activities);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateActivity = async (req, res) => {
  const id = req.params.id;
  try {
    const tobeupdatedActivity = await Activities.findById(id);

    const updatedActivity = await Activities.findByIdAndUpdate(
      id,

      {
        name: req.body.name,
        description: req.body.description,
        done: req.body.done,
      },
      { new: true }
    );

    res.status(200).send(updatedActivity);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addActivity, showActivity, updateActivity };
