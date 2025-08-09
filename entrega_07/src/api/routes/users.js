const {
  getUsers,
  getUserById,
  getUsersByRole,
  postUser,
  putUser,
  deleteUser
} = require('../controllers/users')

const usersRouter = require('express').Router()

usersRouter.get('/role/:role', getUsersByRole)
usersRouter.get('/:id', getUserById)
usersRouter.get('/', getUsers)
usersRouter.post('/', postUser)
usersRouter.put('/:id', putUser)
usersRouter.delete('/:id', deleteUser)

module.exports = usersRouter
