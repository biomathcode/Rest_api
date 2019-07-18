const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes/api')
const mongoose = require('mongoose');
//express 
const app = express();

//connection to mongodb
mongoose.connect('mongodb://localhost/pratikgo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//initializing the routes
app.use('/api',routes);

//error handling middleware
app.use(function(err, req, res,next){
    console.log(err);
    res.status(422).send({error: err.message})
})
//listen for express
app.listen(process.env.port || 4000,function(){
    console.log('now listening for requests');
})