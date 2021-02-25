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
      console.log(workouts[6].exercises[0].duration);
    });
  });
};
