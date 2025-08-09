const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    books: [
      {
        type: String,
        required: false
      }
    ]
  },
  {
    timestamps: true,
    collection: 'subjects'
  }
)

const Subject = mongoose.model('subjects', subjectSchema, 'subjects')
module.exports = Subject
