const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  image: String,
  synopsis: String,
  genre: String   // 👈 add this line
})



module.exports = mongoose.model("Book", bookSchema)
