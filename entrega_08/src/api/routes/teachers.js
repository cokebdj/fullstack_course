const upload = require('../../middlewares/file')
const {
  getTeachers,
  postTeacher,
  deleteTeacher,
  putTeacher
} = require('../controllers/teachers')
const teachersRouter = require('express').Router()

teachersRouter.get('/', getTeachers)
teachersRouter.post('/', upload.fields([{ name: 'img' }]), postTeacher)
teachersRouter.put('/:id', upload.fields([{ name: 'img' }]), putTeacher)
teachersRouter.delete('/:id', deleteTeacher)

module.exports = teachersRouter
