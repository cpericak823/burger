//require node packages
var express = require("express");
var exprhbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//set the port and use express
var app = express();
var PORT = process.env.PORT || 3000;

//require the files
var databaseQueries = require("./models/burger.js");

//listen to the port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log(databaseQuery());

});
