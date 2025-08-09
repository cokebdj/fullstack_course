const mongoose = require('mongoose')

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'classes'
  }
)

const Class = mongoose.model('classes', classSchema, 'classes')
module.exports = Class
