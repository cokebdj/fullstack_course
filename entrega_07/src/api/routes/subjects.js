const { isAuth, isAdmin } = require('../../middlewares/auth')
const {
  getSubjects,
  getSubjectById,
  postSubject,
  putSubject,
  deleteSubject
} = require('../controllers/subjects')

const subjectsRouter = require('express').Router()

subjectsRouter.get('/:id', [isAuth], getSubjectById)
subjectsRouter.get('/', [isAuth], getSubjects)
subjectsRouter.post('/', [isAdmin], postSubject)
subjectsRouter.put('/:id', [isAdmin], putSubject)
subjectsRouter.delete('/:id', [isAdmin], deleteSubject)

module.exports = subjectsRouter
