const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    name: { type: String, required: true },
    skill: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'teachers'
  }
)

const Teacher = mongoose.model('teachers', teacherSchema, 'teachers')
module.exports = Teacher
