const Trainer = require('../models/trainers')

const getTrainers = async (req, res, next) => {
  try {
    const trainers = await Trainer.find().populate('pokemons')
    return res.status(200).json(trainers)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getTrainerById = async (req, res, next) => {
  try {
    const { id } = req.params
    const trainer = await Trainer.findById(id).populate('pokemons')
    return res.status(200).json(trainer)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postTrainer = async (req, res, next) => {
  try {
    const newTrainer = new Trainer(req.body)
    const trainerSaved = await newTrainer.save()
    return res.status(201).json(trainerSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putTrainer = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldTrainer = await Trainer.findById(id)
    const newTrainer = new Trainer(req.body)
    newTrainer._id = id
    newTrainer.pokemons = [...oldTrainer.pokemons, ...req.body.pokemons]
    const trainerUpdated = await Trainer.findByIdAndUpdate(id, newTrainer, {
      new: true
    })
    return res.status(200).json(trainerUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteTrainer = async (req, res, next) => {
  try {
    const { id } = req.params
    const trainerDeleted = await Trainer.findByIdAndDelete(id)
    return res.status(200).json(trainerDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getTrainers,
  getTrainerById,
  postTrainer,
  putTrainer,
  deleteTrainer
}
