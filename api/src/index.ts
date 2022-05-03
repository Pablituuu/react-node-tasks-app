import express from "express";
import cors from "cors";
const app = express();

let tasks: string[] = [];

app.use(cors());
app.use(express.json());
/// GET
app.get("/tasks", (req, res) => {
  res.send({ tasks: tasks });
});

// POST

app.post("/tasks", (req, res) => {
  tasks = tasks.concat(req.body.task);
  res.send({ tasks: tasks });
});

app.get("/components", (req, res) => {
  res.send({ data: "component" });
});

app.listen(8080, () => {
  console.log("APP RUNNIN IN PORT 8080");
});
