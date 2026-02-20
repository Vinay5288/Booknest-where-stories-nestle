const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const User = require("./models/User")
const bcrypt = require("bcryptjs")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
  console.log("MongoDB Connected")

  const adminExists = await User.findOne({ role: "admin" })
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash("admin123", 10)
    await User.create({
      username: "admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin"
    })
    console.log("Default Admin Created")
  }
})
.catch(err => console.log(err))

app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/books", require("./routes/bookRoutes"))

app.listen(5000, () => console.log("Server running on port 5000"))
