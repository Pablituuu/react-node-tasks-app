import express from "express"
import  cors from "cors"
import "./connection"
import bodyparser from "body-parser"
import ruteuser from "./user"

const app = express()

app.use(cors());
app.use(express.json());
app.use("/api/user", ruteuser);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.end("Bienvenido al servidor");
});

app.listen(3004, function () {
  console.log("RUN");
});
