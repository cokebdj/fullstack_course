const { isAuth, isAdmin } = require('../../middlewares/auth')
const {
  getClasses,
  getClassById,
  postClass,
  putClass,
  deleteClass
} = require('../controllers/classes')

const classesRouter = require('express').Router()

classesRouter.get('/:id', [isAuth], getClassById)
classesRouter.get('/', [isAuth], getClasses)
classesRouter.post('/', [isAdmin], postClass)
classesRouter.put('/:id', [isAdmin], putClass)
classesRouter.delete('/:id', [isAdmin], deleteClass)

module.exports = classesRouter
