require('dotenv').config()
const classes = require('../../data/classes')
const Class = require('../../api/models/classes')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allClasses = await Class.find()
    if (allClasses.length) {
      await Class.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Class.insertMany(classes)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
