const Subject = require('../models/subjects')

const getSubjects = async (req, res, next) => {
  try {
    const subjects = await Subject.find()
    return res.status(200).json(subjects)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getSubjectById = async (req, res, next) => {
  try {
    const { id } = req.params
    const subject = await Subject.findById(id)
    return res.status(200).json(subject)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postSubject = async (req, res, next) => {
  try {
    const newSubject = new Subject(req.body)
    const subjectSaved = await newSubject.save()
    return res.status(201).json(subjectSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putSubject = async (req, res, next) => {
  try {
    const { id } = req.params
    const newSubject = new Subject(req.body)
    newSubject._id = id
    const SubjectUpdated = await Subject.findByIdAndUpdate(id, newClass, {
      new: true
    })
    return res.status(200).json(SubjectUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteSubject = async (req, res, next) => {
  try {
    const { id } = req.params
    const subjectDeleted = await Subject.findByIdAndDelete(id)
    return res.status(200).json(subjectDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getSubjects,
  getSubjectById,
  postSubject,
  putSubject,
  deleteSubject
}
