const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    classes: [
      { type: mongoose.Types.ObjectId, ref: 'classes', required: false }
    ],
    subjects: [
      { type: mongoose.Types.ObjectId, ref: 'subjects', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

const User = mongoose.model('users', userSchema, 'users')
module.exports = User
