const {
  getClasses,
  getClassById,
  postClass,
  putClass,
  deleteClass
} = require('../controllers/classes')

const classesRouter = require('express').Router()

classesRouter.get('/:id', getClassById)
classesRouter.get('/', getClasses)
classesRouter.post('/', postClass)
classesRouter.put('/:id', putClass)
classesRouter.delete('/:id', deleteClass)

module.exports = classesRouter
