import mongoose from "mongoose";

mongoose.connect(  "mongodb+srv://Pablituuu:pablito@pablituuu.dtp6u.mongodb.net/Pablituuu?retryWrites=true&w=majority"
);

const objectdb=mongoose.connection;

objectdb.on("connected", () => {
    console.log("Conectado2");
  });
  objectdb.on("error", () => {
    console.log("Conectado1");
  });

export default mongoose