const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    img: { type: String },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    classes: { type: mongoose.Types.ObjectId, ref: 'classes', required: false },
    subjects: [
      { type: mongoose.Types.ObjectId, ref: 'subjects', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model('users', userSchema, 'users')
module.exports = User
