require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const usersRouter = require('./src/api/routes/users')
const classesRouter = require('./src/api/routes/classes')
const subjectsRouter = require('./src/api/routes/subjects')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/classes', classesRouter)
app.use('/api/v1/subjects', subjectsRouter)

app.all('/{*any}', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Up and running at: http://localhost:3000')
})
