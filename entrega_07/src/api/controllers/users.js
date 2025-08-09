const User = require('../models/users')

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

const postUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body)
    const UserSaved = await newUser.save()
    return res.status(201).json(UserSaved)
  } catch (error) {
    return res.status(400).json(error)
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
  getUsers,
  getUserById,
  getUsersByRole,
  postUser,
  putUser,
  deleteUser
}
