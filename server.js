// Import sections
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

//Use env for store data
require('dotenv').config()

// Initialize the app
let app = express();
let apiRoutes = require("./api-routes")

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://'+ process.env.URL + '/' + process.env.DB_NAME);
var db = mongoose.connection;

// Setup server port
var port = process.env.PORT;

// Send message for default URL
app.get('/', (req, res) => res.send('It alive!'));

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});