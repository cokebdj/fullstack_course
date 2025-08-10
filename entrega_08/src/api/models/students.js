const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    name: { type: String, required: true },
    skill: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'students'
  }
)

const Student = mongoose.model('students', studentSchema, 'students')
module.exports = Student
