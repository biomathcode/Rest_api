const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes/api')
//express 
const app = express();

app.use(bodyParser.json());
//initializing the routes
app.use('/api',routes);
//listen for express
app.listen(process.env.port || 4000,function(){
    console.log('now listening for requests');
})