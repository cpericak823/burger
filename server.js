//require node packages
var express = require("express");
var exprhbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//set the port and use express
var app = express();
var PORT = process.env.PORT || 3000;

//require the route
var connection = require("./controllers/burgers-controller.js");

//listen to the port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

});
