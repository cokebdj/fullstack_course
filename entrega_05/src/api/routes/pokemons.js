const {
  getPokemons,
  getPokemonById,
  getPokemonsByType,
  postPokemon,
  putPokemon,
  deletePokemon
} = require('../controllers/pokemons')

const pokemonsRouter = require('express').Router()

pokemonsRouter.get('/type/:type', getPokemonsByType)
pokemonsRouter.get('/:id', getPokemonById)
pokemonsRouter.get('/', getPokemons)
pokemonsRouter.post('/', postPokemon)
pokemonsRouter.put('/:id', putPokemon)
pokemonsRouter.delete('/:id', deletePokemon)

module.exports = pokemonsRouter
