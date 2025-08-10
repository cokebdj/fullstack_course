const upload = require('../../middlewares/file')
const {
  getStudents,
  postStudent,
  deleteStudent
} = require('../controllers/students')
const studentsRouter = require('express').Router()

studentsRouter.get('/', getStudents)
studentsRouter.post('/', upload.fields([{ name: 'img' }]), postStudent)
studentsRouter.delete('/:id', deleteStudent)

module.exports = studentsRouter
