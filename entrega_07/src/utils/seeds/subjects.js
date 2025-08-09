require('dotenv').config()
const subjects = require('../../data/subjects')
const Subject = require('../../api/models/subjects')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allSubjects = await Subject.find()
    if (allSubjects.length) {
      await Subject.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Subject.insertMany(subjects)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
