// Dependencies
// =============================================================
const express = require("express");
const mssql = require("mssql")
const mysql = require("mysql")
const path = require("path");
const fs = require("fs");
//const dataJSON = require("data.json");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: 3306,
    databse: 'Chef'
});



connection.connect(err => {
    if (err) throw err;
});

const useDb = connection.query('USE Chef', (err, results) =>{
    if (err) throw err;
})
console.log('Connected')
useDb;
connection.query('SELECT * FROM Contestants', (err, results) => {
    if (err) throw err;
    console.log(results)
});

let server = app.listen(5000, () => {
    console.log('listening on localhost 5000')
})
