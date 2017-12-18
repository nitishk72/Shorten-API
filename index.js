// Express
const express = require('express');
const app = express();
// PORT NUMBER
const PORT =  3000;
// MongoDB
const mongoose = require('mongoose');
const Task = require('./api/models/model'); //created model loading here
const bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ShortenURL',{useMongoClient:true});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// IMPORTING ROUTES
var routes = require('./api/routes/route');
// REGISTER YOUR ROUTES
routes(app);
app.get('/',function(req,res){
  res.send('<center><h1>This is Homepage</h1></center>');
});
// START RUNNING server
app.listen(PORT);
// GET RUNNING PORT NUMBER
console.log('ShortenURL running on PORT NUMBER : ' + PORT);
