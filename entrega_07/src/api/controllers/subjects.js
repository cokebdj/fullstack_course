const Subject = require('../models/subjects')

const getSubjects = async (req, res, next) => {
  try {
    const subjects = await Subject.find().populate('pokemons')
    return res.status(200).json(subjects)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getSubjectById = async (req, res, next) => {
  try {
    const { id } = req.params
    const subject = await Subject.findById(id).populate('pokemons')
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
    const oldSubject = await Subject.findById(id)
    const newSubject = new Subject(req.body)
    newSubject._id = id
    const pokemonWithDuplicates = [...oldSubject.pokemons, ...req.body.pokemons]
    newSubject.pokemons = [...new Set(pokemonWithDuplicates)]
    const subjectUpdated = await Subject.findByIdAndUpdate(id, newSubject, {
      new: true
    })
    return res.status(200).json(subjectUpdated)
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
