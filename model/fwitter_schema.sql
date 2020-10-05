DROP DATABASE IF EXISTS fwitter_db;

CREATE DATABASE fwitter_db;
 
USE fwitter_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(16) NOT NULL,
    PRIMARY KEY(id)
);
