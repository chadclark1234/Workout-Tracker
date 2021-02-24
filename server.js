const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const Workout = require("./models/workouts");

// CONNECT TO MONGODB \\
const dbURI =
  "mongodb+srv://tracker:tracker1234@fitness-tracker.kbdrt.mongodb.net/tracker?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to db");
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/add-workout", (req, res) => {
  const workout = new Workout({
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
      },
    ],
  });
  workout
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
//   useNewUrlParser: true,
// });

// db.Library.create({ name: "Campus Library" })
//   .then((dbLibrary) => {
//     console.log(dbLibrary);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// app.post("/submit", ({ body }, res) => {
//   db.Book.create(body)
//     .then(({ _id }) =>
//       db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true })
//     )
//     .then((dbLibrary) => {
//       res.json(dbLibrary);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.get("/books", (req, res) => {
//   db.Book.find({})
//     .then((dbBook) => {
//       res.json(dbBook);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.get("/library", (req, res) => {
//   db.Library.find({})
//     .then((dbLibrary) => {
//       res.json(dbLibrary);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//     .populate("books")
//     .then((dbLibrary) => {
//       res.json(dbLibrary);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });