const {
  getTrainers,
  getTrainerById,
  postTrainer,
  putTrainer,
  deleteTrainer
} = require('../controllers/trainers')

const trainersRouter = require('express').Router()

trainersRouter.get('/:id', getTrainerById)
trainersRouter.get('/', getTrainers)
trainersRouter.post('/', postTrainer)
trainersRouter.put('/:id', putTrainer)
trainersRouter.delete('/:id', deleteTrainer)

module.exports = trainersRouter
