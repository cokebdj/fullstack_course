require('dotenv').config()
const teachers = require('../../data/teachers')
const Teacher = require('../../api/models/teachers')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allTeachers = await Teacher.find()
    if (allTeachers.length) {
      await Teacher.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Teacher.insertMany(teachers)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
