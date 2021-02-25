const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Workout = require("./models/workouts");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// ALLOWS ACCESS TO PAGES \\
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);
// const db = require("./models");

// CONNECT TO MONGODB \\
const dbURI =
  "mongodb+srv://tracker:tracker1234@fitness-tracker.kbdrt.mongodb.net/tracker?retryWrites=true&w=majority";
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((result) => {
    console.log("connected to db");
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
//   useNewUrlParser: true,
// });
