    //require the mysql connect.js file
    var mysqlConnection = require("../config/connect.js");

    module.exports = function databaseQuery(app) {

        //set userInput equal to a variable to be used as a query
        var userInput;

        //A query which adds a new burger based on the userInput
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: userInput,
            devoured: false
        }, function(err, res) {
            if (err) throw err;
        });


    };
