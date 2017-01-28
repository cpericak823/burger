//require express
var express = require("express");

//set the express function equal to the app variable
var app = express();

//require the burger.js file
var databaseQueries = require("../models/burger.js");

var connection = require("../config/connect.js");


//export the routes to be accessed later
module.exports = function(app) {

    //route to get the data and return an html page
    app.get("/", function(req, res) {
        //set userInput equal to a variable to be used as a query
        var userInput = req.body;
        res.render("index", { index: [{ burger_name: userInput }, { devoured: false }] });
    });

    //A query which adds a new burger based on the userInput to the database
    app.post("/", function(req, res) {
        console.log("got to post");

        //set userInput equal to a variable to be used as a query
        var userInput = req.body;

        //add the burger to the database
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: userInput.burger_name,
            devoured: false
        }, function(err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });

    });

    //a query that updates the burger
    app.put("/", function(req, res) {

        //update the burger in the database
        connection.query("UPDATE burgers SET burger_name = ?", {
                burger_name: userInput.burger_name,
                devoured: true
            },
            function(err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res);
                }
            });
    });

    //a query that deletes the burger
    app.delete("/", function(req, res) {
        connection.query("DELETE FROM burgers WHERE ?", {
            burger_name: userInput.burger_name,
            devoured: true
        }, function(err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });
    });
};
