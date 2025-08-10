require('dotenv').config()
const students = require('../../data/students')
const Student = require('../../api/models/students')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allStudents = await Student.find()
    if (allStudents.length) {
      await Student.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Student.insertMany(students)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
