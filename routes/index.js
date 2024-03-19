const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/api/v1/estudiantes", userController.getAllStudents);
router.get("/api/v1/estudiantes/:id:", userController.getStudentById);
router.post("/api/v1/estudiantes", userController.createStudents);
router.put("/api/v1/estudiantes/nombre/:nombre", userController.updateStudent);
router.delete("/api/v1/estudiantes/nombre/:nombre", userController.deleteStudent);

module.exports = router;
