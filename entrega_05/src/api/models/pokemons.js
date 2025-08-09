const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: ['electric', 'grass', 'water', 'fire', 'normal', 'dark']
    }
  },
  {
    timestamps: true,
    collection: 'pokemons'
  }
)

const Pokemon = mongoose.model('pokemons', pokemonSchema, 'pokemons')
module.exports = Pokemon
