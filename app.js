import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { testEstudiantes } from "./Controllers/EstudiantesController.js";



dotenv.config();

mongoose.connect(process.env.urlbd)
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  }) .catch((error) => {
    console.log("Error al conectar a la base de datos:", error);
  });

const app = express();
app.use(cors());


app.listen(4000, () => {
  console.log("si se escucha  de la base de datos");
});

testEstudiantes();

