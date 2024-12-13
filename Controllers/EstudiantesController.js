import { EstudiantesModel } from "../Models/EstudiantesModels.js";

export const testEstudiantes = async () => {
  try {
    
    const EstudiantesModel = await EstudiantesModel.create({
      nombre: "Mayoneso",
      apepat: "Pelon",
      edad: 21,
      grade:"A",
      carrera: "Ingenieria",
    });

 
 console .log ("el estudiante ha sido creado correctamente");
  } catch (error) {
    console .error ("Error al crear el estudiante verifica que sea correcto:", error);
  }}
