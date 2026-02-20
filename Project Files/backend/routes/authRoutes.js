const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")

// REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body

  if (role === "admin")
    return res.status(403).json({ message: "Admin cannot register" })

  try {
    const existing = await User.findOne({ email })
    if (existing)
      return res.status(400).json({ message: "User exists" })

    const hashed = await bcrypt.hash(password, 10)

    await User.create({ username, email, password: hashed, role })

    res.json({ message: "Registered successfully" })
  } catch {
    res.status(500).json({ message: "Server error" })
  }
})

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ message: "User not found" })

  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(400).json({ message: "Invalid password" })

  res.json({
    id: user._id,
    username: user.username,
    role: user.role
  })
})

module.exports = router
