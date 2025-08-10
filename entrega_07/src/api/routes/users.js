const { isAuth, isAdmin } = require('../../middlewares/auth')
const {
  register,
  login,
  getUsers,
  getUserById,
  getUsersByRole,
  putUser,
  deleteUser
} = require('../controllers/users')

const usersRouter = require('express').Router()

usersRouter.get('/role/:role', [isAuth], getUsersByRole)
usersRouter.get('/:id', [isAuth], getUserById)
usersRouter.post('/register', register)
usersRouter.post('/login', login)
usersRouter.get('/', [isAuth], getUsers)
usersRouter.put('/:id', [isAdmin], putUser)
usersRouter.delete('/:id', [isAdmin], deleteUser)

module.exports = usersRouter
