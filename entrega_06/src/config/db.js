const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected')
  } catch (error) {
    console.log('Something wrong')
  }
}
module.exports = { connectDB }
