import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import './connection'
import '.'

const eschema = mongoose.Schema;
const app = express();
app.use(cors());
app.use(express.json());


const eschemauser=new eschema({
  name: String,
  email: String,
  telephone: String,
  iduser: String,
})
const ModelUser = mongoose.model("users", eschemauser);

app.get("/listuser", (req, res) => {
  ModelUser.find({}, function (docs:any, err:any) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

app.post("/adduser", (req, res) => {
  const newuser = new ModelUser({
    name: req.body.name,
    email: req.body.email,
    telephone: req.body.telephone,
    iduser: req.body.iduser,
  });
  newuser.save(function (err:any) {
    if (!err) {
      res.send("User add correct");
    } else {
      res.send(err);
    }
  });
});

app.post("/getdatauser", (req, res) => {
  ModelUser.find({ _id: req.body.iduser }, function (docs:any, err:any) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

app.put("/updateuser", (req, res) => {
  
  ModelUser.findByIdAndUpdate(req.body.iduser,{name: req.body.name,
    email: req.body.email,
    telephone: req.body.telephone,},
    (err:any) => {
      if (!err) {
        res.send("User update");
      } else {
        res.send(err);
      }
    }
  );
});

app.delete("/deleteuser",(req,res)=>{
  console.log(req.body.source._id)
  ModelUser.findOneAndDelete({_id:req.body.source._id}, function (err:any, docs:any) {
    if (err){
        console.log(err)
    }
    else{
        res.send("Deleted User");
    }
})
}
)

export default app


// let tasks: string[] = [];


// app.use(express.json());
// /// GET
// app.get("/tasks", (req, res) => {
//   res.send({ tasks: tasks });
// });

// // POST

// app.post("/tasks", (req, res) => {
//   tasks = tasks.concat(req.body.task);
//   res.send({ tasks: tasks });
// });

// app.get("/components", (req, res) => {
//   res.send({ data: "component" });
// });

// app.listen(8080, () => {
//   console.log("APP RUNNIN IN PORT 8080");
// });
