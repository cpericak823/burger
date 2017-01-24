module.exports = function() {
    /* require my sql*/
    var mysql = require("mysql");

    /* connect to my sql*/
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,

        user: "root",

        password: "tank82391!",
        database: "burgers_db"
    });

    connection.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);

        // //log the database function
// console.log(showDatabase());


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
