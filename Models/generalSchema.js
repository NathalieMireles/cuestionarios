import { Schema } from 'mongoose';


export const EsquemaGeneral = new Schema({
  nombre: {
    type: String,
    required: true, 
  },
  apepat: {
    type: String,
    required: true, 
  },
  edad:{
    type: Number,
    required: true, 
  },
  carrera: {
    type: String,
    required: true, 
  },

  grade :{
    type: Number,
    required: true,
  }
  });


