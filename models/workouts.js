const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Workout = mongoose.model("Workout", workoutSchema);

const workoutSchema = new Schema({
  day: new Date().setDate(new Date().getDate() - 10),
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

module.exports = Workout;
