module.exports = connection;

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

});
