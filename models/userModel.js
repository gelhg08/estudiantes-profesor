const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profesorSchema = new Schema({
  nombre: String,
  especialidad: String,
  correo: String,
});

const Profesor = mongoose.model("Profesor", profesorSchema);

const estudiantesSchema = new Schema({
  nombre: String,
  edad: Number,
  correo: String,
  profesorId: {
    type: Schema.Types.ObjectId,
    ref: "Profesor",
  },
});

const Estudiantes = mongoose.model("Estudiante", estudiantesSchema);

module.exports = { Profesor, Estudiantes };