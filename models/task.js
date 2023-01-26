// import  mongoose
const mongoose = require('mongoose');
// database schema definition
// this will be use to create data base schemas
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

// defining the name of database
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;


