const upload = require('../../middlewares/file')
const {
  getTeachers,
  postTeacher,
  deleteTeacher
} = require('../controllers/teachers')
const teachersRouter = require('express').Router()

teachersRouter.get('/', getTeachers)
teachersRouter.post('/', upload.fields([{ name: 'img' }]), postTeacher)
teachersRouter.delete('/:id', deleteTeacher)

module.exports = teachersRouter
