const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const Task = require('./models/task');
const app = express();

// Set view engine as ejs
app.set('view engine', 'ejs');
// Set path for views
app.set('views', './views');
app.use(express.urlencoded());

// To use static files, present in assets directory
app.use(express.static('assets'));  

app.use('/', require('./routes/index'));

// Setting express to listen to port 
app.listen(port ,function(err){
    if(err){
        console.log(`Error in running the Server: ${err}`);
    };
    console.log(`Server is running on port: ${port}`);
});
