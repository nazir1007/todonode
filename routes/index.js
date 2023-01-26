const express = require("express");
const router = express.Router();

const Task = require('../models/task');

// our home controller
router.get('/', function(req, res){
  Task.find({},function(err,tasks)
  {
      if(err) {
         console.log("error infetching "); 
         return;
        }
      return res.render('home',{
          title: "TODO APP",
          task: tasks
        }); 
      });
   });

//controller to tackle form 
router.post('/create-task',function(req,res)
{
   // we will read form data here 
  Task.create(
      {
        description: req.body.desc,
        category: req.body.category,
        date: req.body.date
      },function(err,newTask)
      {
          if(err)  
          {
              console.log("error in creating database");
              return;
            }
          console.log("**** ",newTask);
          return res.redirect('back');
      });
    });


  // delete the task
 router.get('/delete-task',function(req,res){
       if(req.xhr){
       const id=req.query.id;
       //console.log("deleting from databse ",id);
    Task.findByIdAndDelete(id,function(err)
    {
         if(err) {
              console.log("Error in deleteing ");
              return ;
            } 
           return res.status(200).json(
             {
                 data:
                 {
                     message:"Task Deleted"
                 }
                
             });
            
       });
       
    }  
});

module.exports = router;