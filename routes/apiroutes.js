const path = require("path");
const fs = require("fs");
const Workout = require("../models/workouts.js");

module.exports = (app) => {
  // GRAB LAST WORKOUT FROM DB AND DISPLAY ON HOMEPAGE \\
  app.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  // ADD EXERCISE TO THE LAST UNCOMPLETED WORKOUT \\
  app.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: req.body } },
      (update) => {
        res.json(update);
      },
      (err) => {
        console.log(err);
      }
    );
  });

  // ADD NEW EXERCISE TO DB \\
  app.post("/api/workouts", (req, res) => {
    // console.log(req);
  });

  //Display all workouts on range page
  app.get("/api/workouts/range", ({}, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7)
      .then((Workout) => {
        res.json(Workout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
