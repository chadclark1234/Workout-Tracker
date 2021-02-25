const path = require("path");
const fs = require("fs");
const Workout = require("../models/workouts.js");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, workouts) => {
      console.log(workouts);
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });
};
