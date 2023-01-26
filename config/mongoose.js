// require the library
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// connect to database
mongoose.connect('mongodb://localhost/todoapp_db');

// acquire the connection(to check if it is successfull)
const db = mongoose.connection;

// Error
db.on('error', console.error.bind(console, 'error connecting to db'));

// Up and running then print the message
db.once('open', function(){
    console.log('Successfully connected to the database');
});