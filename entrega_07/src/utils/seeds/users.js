require('dotenv').config()
const users = require('../../data/users')
const User = require('../../api/models/users')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allUsers = await User.find()
    if (allUsers.length) {
      await User.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await User.insertMany(users)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
