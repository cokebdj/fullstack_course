require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const pokemonsRouter = require('./src/api/routes/pokemons')
const trainersRouter = require('./src/api/routes/trainers')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/v1/pokemons', pokemonsRouter)
app.use('/api/v1/trainers', trainersRouter)

app.all('/{*any}', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Up and running at: http://localhost:3000')
})

//https://github.com/rockthecodebythepower/proyectos-clases/blob/master/11_noviembre/19_Proyecto_6_29_11_2023/index.js
