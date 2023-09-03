// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var dataJSON = require("data.json");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
