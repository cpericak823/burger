//require express
var express = require("express");

//set the express function equal to the app variable
var app = express();

//require the burger.js file
var databaseQueries = require("../models/burger.js");

//export the route to be accessed later
module.exports = function controller(app) {
    app.get("/", function(req, res) {
        res.send(databaseQueries);
    });
};
