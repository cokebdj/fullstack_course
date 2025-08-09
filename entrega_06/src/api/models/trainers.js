const mongoose = require('mongoose')

const trainerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    pokemons: [
      { type: mongoose.Types.ObjectId, ref: 'pokemons', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'trainers'
  }
)

const Trainer = mongoose.model('trainers', trainerSchema, 'trainers')
module.exports = Trainer
