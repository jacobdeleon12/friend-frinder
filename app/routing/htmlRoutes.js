var path = require("path");
// var express = require("express");
// const app = express();
// var htmlrouter = express.Router();

// Routes
// =============================================================

module.exports = function(app) {



 app.get("/survey", function(req, res) {
   res.sendFile(path.join(__dirname, "/../public/survey.html"));
 });

 // If no matching route is found default to home
 app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "/../public/home.html"));
 });

};