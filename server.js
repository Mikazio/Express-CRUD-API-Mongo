// Import sections
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

//Use env file
require('dotenv').config()

// Setup variable to use env data
var port = process.env.PORT;
var url = process.env.URL;
var dbName = process.env.DB_NAME;

// Initialize the app
let app = express();
let apiRoutes = require("./Router/api-routes")

//set view engine to ejs
app.set('views', './View');
app.set('view engine', 'ejs');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://'+ url + '/' + dbName);
var db = mongoose.connection;

// Send message for default URL
app.get('/', function (req, res) {
    res.render('index')
});

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});