const { generateSign } = require('../../config/jwt')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      name: req.body.name,
      password: req.body.password
    })

    const userDuplicated = await User.findOne({ name: req.body.name })

    if (userDuplicated) {
      return res.status(400).json('User already in database')
    }

    const userSaved = await newUser.save()

    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name })

    if (!user) {
      return res.status(400).json('Wrong user or password')
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      //! lo que pasa cuando te logueas con jsonwebtoken
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('Wrong user or password')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate('classes').populate('subjects')
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json('Error in request')
  }
}

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
      .populate('classes')
      .populate('subjects')
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json('Error in request')
  }
}

const getUsersByRole = async (req, res, next) => {
  try {
    const { role } = req.params
    const Users = await User.find({ role })
      .populate('classes')
      .populate('subjects')
    return res.status(200).json(Users)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const putUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const newUser = new User(req.body)
    newUser._id = id
    const UserUpdated = await User.findByIdAndUpdate(id, newUser, {
      new: true
    })
    return res.status(200).json(UserUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const UserDeleted = await User.findByIdAndDelete(id)
    return res.status(200).json(UserDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  register,
  login,
  getUsers,
  getUserById,
  getUsersByRole,
  putUser,
  deleteUser
}
