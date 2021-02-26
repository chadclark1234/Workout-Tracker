const path = require("path");
const fs = require("fs");
const Workout = require("../models/workouts.js");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
      // console.log(workouts[6].exercises[0].duration);
    });
  });
  app.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    const id = req.params.id;
    Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: req.body } },
      (err, workouts) => {
        console.log(err);
      }
    );
  });
};
