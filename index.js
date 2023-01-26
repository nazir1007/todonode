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

// // our home controller

// app.get('/', function(req, res){
//   Task.find({},function(err,tasks)
//   {
//       if(err) {
//          console.log("error infetching "); 
//          return;
//         }
//       return res.render('home',{
//           title: "TODO APP",
//           task: tasks
//         }); 
//       });
//    });

// //controller to tackle form 
// app.post('/create-task',function(req,res)
// {
//    // we will read form data here 
//   Task.create(
//       {
//         description:req.body.desc,
//         category:req.body.category,
//         date:req.body.date
//       },function(err,newTask)
//       {
//           if(err)  
//           {
//               console.log("error in creating database");
//               return;
//             }
//           console.log("**** ",newTask);
//           return res.redirect('back');
//       });
//     });

// app.get('/delete-task',function(req,res){
//        if(req.xhr){
//        const id=req.query.id;
//        console.log("deleting from databse ",id);
//     Task.findByIdAndDelete(id,function(err)
//     {
//          if(err) {
//               console.log("Error in deleteing ");
//               return ;
//             } 
//            return res.status(200).json(
//              {
//                  data:
//                  {
//                      message:"Task Deleted"
//                  }
//              });
//        });
//     }  
// });

app.use('/', require('./routes/index'));

// Setting express to listen to port 
app.listen(port ,function(err){
    if(err){
        console.log(`Error in running the Server: ${err}`);
    };
    console.log(`Server is running on port: ${port}`);
});
