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

const putTeacher = async (req, res, next) => {
  try {
    const { id } = req.params
    const newTeacher = new Teacher(req.body)
    if (req.files) {
      newTeacher.img = req.files.img[0].path
    }
    const oldTeacher = await Teacher.findById(id)
    newTeacher._id = id
    const TeacherUpdated = await Teacher.findByIdAndUpdate(id, newTeacher, {
      new: true
    })
    if (TeacherUpdated.img != oldTeacher.img) {
      deleteFile(oldTeacher.img)
    }
    return res.status(200).json(TeacherUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
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

module.exports = { getTeachers, postTeacher, deleteTeacher, putTeacher }
