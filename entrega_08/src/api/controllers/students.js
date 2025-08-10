const { deleteFile } = require('../../utils/deleteFile')
const Student = require('../models/students')

const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find()
    return res.status(200).json(students)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const postStudent = async (req, res, next) => {
  try {
    const newStudent = new Student(req.body)
    if (req.files) {
      newStudent.img = req.files.img[0].path
    }
    const studentSaved = await newStudent.save()
    return res.status(201).json(studentSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params
    const studentDeleted = await Student.findByIdAndDelete(id)
    deleteFile(studentDeleted.img)
    return res.status(200).json({
      mensaje: 'Elemento eliminado',
      studentDeleted
    })
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = { getStudents, postStudent, deleteStudent }
