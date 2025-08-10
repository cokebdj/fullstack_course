const upload = require('../../middlewares/file')
const {
  getStudents,
  postStudent,
  deleteStudent,
  putStudent
} = require('../controllers/students')
const studentsRouter = require('express').Router()

studentsRouter.get('/', getStudents)
studentsRouter.post('/', upload.fields([{ name: 'img' }]), postStudent)
studentsRouter.put('/:id', upload.fields([{ name: 'img' }]), putStudent)
studentsRouter.delete('/:id', deleteStudent)

module.exports = studentsRouter
