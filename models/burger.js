    //require the mysql connect.js file
    var connection = require("../config/connect.js");

    module.exports = function(app) {

        //set userInput equal to a variable to be used as a query
        var userInput;

        //A query which adds a new burger based on the userInput
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: userInput,
            devoured: false
        }, function(err, res) {
            if (err) throw err;
        });

        //a function that queries the database and shows all the burgers in the database
        function showDatabase() {
            connection.query("SELECT burger_name FROM burgers WHERE burger_name = ?", [userInput], function(err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                    console.log(res[i].burger_name);
                }
            });
        }
    };
