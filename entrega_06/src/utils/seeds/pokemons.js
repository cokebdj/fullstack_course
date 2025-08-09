require('dotenv').config()
const pokemons = require('../../data/pokemons')
const Pokemon = require('../../api/models/pokemons')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allPokemons = await Pokemon.find()
    if (allPokemons.length) {
      await Pokemon.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Pokemon.insertMany(pokemons)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
