const Pokemon = require('../models/pokemons')

const getPokemons = async (req, res, next) => {
  try {
    const pokemons = await Pokemon.find()
    return res.status(200).json(pokemons)
  } catch (error) {
    return res.status(400).json('Error in request')
  }
}

const getPokemonById = async (req, res, next) => {
  try {
    const { id } = req.params
    const pokemon = await Pokemon.findById(id)
    return res.status(200).json(pokemon)
  } catch (error) {
    return res.status(400).json('Error in request')
  }
}

const getPokemonsByType = async (req, res, next) => {
  try {
    const { type } = req.params
    const Pokemons = await Pokemon.find({ type })
    return res.status(200).json(Pokemons)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postPokemon = async (req, res, next) => {
  try {
    const newPokemon = new Pokemon(req.body)
    const PokemonSaved = await newPokemon.save()
    return res.status(201).json(PokemonSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putPokemon = async (req, res, next) => {
  try {
    const { id } = req.params
    const newPokemon = new Pokemon(req.body)
    newPokemon._id = id
    const PokemonUpdated = await Pokemon.findByIdAndUpdate(id, newPokemon, {
      new: true
    })
    return res.status(200).json(PokemonUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deletePokemon = async (req, res, next) => {
  try {
    const { id } = req.params
    const PokemonDeleted = await Pokemon.findByIdAndDelete(id)
    return res.status(200).json(PokemonDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getPokemons,
  getPokemonById,
  getPokemonsByType,
  postPokemon,
  putPokemon,
  deletePokemon
}
