const {Estudiantes, Profesores} = require('../models/userModel')

const userController = {
  //OBTENER TODOS LOS ESTUDIANTES
  getAllStudents: async (req, res) => {
    try {
      const estudiantes = await Estudiantes.find();
      res.json(estudiantes);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //OBTENER UN ESTUDIANTE POR SU ID
  getStudentById: async (req, res) => {
    const id = req.params.id
    try {
      const student = await Estudiantes.findById(id)
      res.json(student);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //CREAR UN ESTUDIANTE
  createStudents: async (req, res) => {
    const createStudent= req.body;
    try {
      const newStudent = new Estudiantes(createStudent);
      const savedStudent = await newStudent.save();
      res.json(savedStudent);
    } catch (error) {
      console.error("Error al crear el estudiante:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //ACTUALIZAR UN ESTUDIANTE POR SU NOMBRE, 
  updateStudent: async (req, res) => {
    try {
      const { nombre } = req.params;
      const updateStudent = await Libros.findOneAndUpdate(
        { nombre: nombre },
        { $set: { nombre: "Julian" } }
      );
      res.json(updateStudent);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //ELIMINAR UN ESTUDIANTE POR SU NOMBRE

  deleteStudent: async (req, res) => {
    try {
      const id = req.params.id;
      const studentDelete = await Estudiantes.findOneAndDelete({ id });
      res.json(studentDelete);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};


module.exports = userController;