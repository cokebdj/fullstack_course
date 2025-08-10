const { deleteFile } = require('../../utils/deleteFile')
const Teacher = require('../models/teachers')

const getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find()
    return res.status(200).json(teachers)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const postTeacher = async (req, res, next) => {
  try {
    const newTeacher = new Teacher(req.body)
    if (req.files) {
      newTeacher.img = req.files.img[0].path
    }
    const teacherSaved = await newTeacher.save()
    return res.status(201).json(teacherSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteTeacher = async (req, res, next) => {
  try {
    const { id } = req.params
    const teacherDeleted = await Teacher.findByIdAndDelete(id)
    deleteFile(teacherDeleted.img)
    return res.status(200).json({
      mensaje: 'Elemento eliminado',
      teacherDeleted
    })
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = { getTeachers, postTeacher, deleteTeacher }
