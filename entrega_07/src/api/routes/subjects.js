const {
  getSubjects,
  getSubjectById,
  postSubject,
  putSubject,
  deleteSubject
} = require('../controllers/subjects')

const subjectsRouter = require('express').Router()

subjectsRouter.get('/:id', getSubjectById)
subjectsRouter.get('/', getSubjects)
subjectsRouter.post('/', postSubject)
subjectsRouter.put('/:id', putSubject)
subjectsRouter.delete('/:id', deleteSubject)

module.exports = subjectsRouter
