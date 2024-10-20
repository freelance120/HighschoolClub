const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const activities = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { activities });
});

app.get("/add", (req, res) => {
  res.render("addActivity");
});

app.post("/add", (req, res) => {
  const { name, club, date, participants } = req.body;
  activities.push({ name, club, date, participants });
  res.redirect("/");
});

app.post("/delete/:index", (req, res) => {
  const index = req.params.index;
  activities.splice(index, 1);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
