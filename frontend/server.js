const express = require("express");
const app = express();
const mongoose=require("mongoose");
const user=require("./db_schemas/user_details");
const cors=require("cors");
const bodyParser=require("body-parser");

const mongoDB = "mongodb+srv://badri:badri@mycluster.14pctmy.mongodb.net/?retryWrites=true&w=majority";
// const mongoDB = "mongodb+srv://vinay:ganesha2002@cluster0.r1o1fjf.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);




mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
  console.log("Connection to mongodb success")
},e=>{console.log(e)});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Bind connection to error event (to get notification of connection errors)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(

    cors({
      origin:"http://localhost:3000"
    })
  )


app.post("/path",async (req,res)=>{
    console.log("path")
    console.log(req.body);
    let put=0
    try{
    let monobj=await user.create(req.body);
    await monobj.save();}
    catch(error)
    { put=1;
    }
    res.send({put});

});
app.get("/retrieval",(req,res)=>{
    console.log(req.query)
    user.find({},(err,items)=>{
        if(err){
            console.log("error");
        }
        else{
            console.log(items)
            res.send({items})
            // res.send({Details:items})
        }
    })
});
app.get("/search",(req,res)=>{
  console.log(req.query)
  user.find({Employee_id:req.query.Employee_id},(err,items)=>{
      if(err){
          console.log("error");
      }
      else{
          console.log(items)
          res.send({items})
          // res.send({Details:items})
      }
  })
});
app.get("/check",(req,res)=>{
  console.log(req.query)
  user.find({Email:req.query.Email,Password:req.query.Password},(err,items)=>{
      if(err){
          console.log("error");
      }
      else{
          console.log(items)
          console.log("inserver");
          if(items){
          res.send({match:1})}
          else{
            res.send({match:0})
          }
      }
  })
});



app.post("/delete", (req, res, next) => {
  console.log(req.body);
  console.log("deleteing")
  user.findOneAndDelete({Employee_id:req.body.Employee_id}, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Deleted User : ", docs);
    }
});
});

app.post("/update", (req, res, next) => {
  console.log(req.body);
  console.log("upd")
  user.findOneAndUpdate({Employee_id:req.body.Employee_id}, 
    {Employee_dept:req.body.Employee_newDept},{new:false}, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Original Doc : ",docs);
    }

});
});

app.listen(4000);