require('dotenv').config()
const trainers = require('../../data/trainers')
const Trainer = require('../../api/models/trainers')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allTrainers = await Trainer.find()
    if (allTrainers.length) {
      await Trainer.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Trainer.insertMany(trainers)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
