CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (255) NOT NULL,
devoured BOOLEAN not null,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

SET time_zone='+00:00';

