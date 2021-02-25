const path = require("path");
const fs = require("fs");

module.exports = (app) => {
  // app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/index.html")).catch((err) => {
  //     console.log(err);
  //   });
  // });

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
