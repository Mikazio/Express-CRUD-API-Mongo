const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Use env file
require('dotenv').config()

// Setup variable to use env data
var port = process.env.PORT;
var url = process.env.URL;
var dbName = process.env.DB_NAME;

// create express app
const app = express();

require("./Router/api-routes")(app);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://'+ url + '/' + dbName);
var db = mongoose.connection;

// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});