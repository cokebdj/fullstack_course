const Class = require('../models/classes')

const getClasses = async (req, res, next) => {
  try {
    const classes = await Class.find()
    return res.status(200).json(classes)
  } catch (error) {
    return res.status(400).json('Error in request')
  }
}

const getClassById = async (req, res, next) => {
  try {
    const { id } = req.params
    const classe = await Class.findById(id)
    return res.status(200).json(classe)
  } catch (error) {
    return res.status(400).json('Error in request')
  }
}

const postClass = async (req, res, next) => {
  try {
    const newClass = new Class(req.body)
    const ClassSaved = await newClass.save()
    return res.status(201).json(ClassSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putClass = async (req, res, next) => {
  try {
    const { id } = req.params
    const newClass = new Class(req.body)
    newClass._id = id
    const ClassUpdated = await Class.findByIdAndUpdate(id, newClass, {
      new: true
    })
    return res.status(200).json(ClassUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteClass = async (req, res, next) => {
  try {
    const { id } = req.params
    const ClassDeleted = await Class.findByIdAndDelete(id)
    return res.status(200).json(ClassDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getClasses,
  getClassById,
  postClass,
  putClass,
  deleteClass
}
