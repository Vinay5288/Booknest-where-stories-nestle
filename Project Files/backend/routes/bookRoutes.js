const router = require("express").Router()
const Book = require("../models/Book")

// Add book
router.post("/", async (req, res) => {
  const book = new Book(req.body)
  await book.save()
  res.json(book)
})

// Get all books
router.get("/", async (req, res) => {
  const books = await Book.find()
  res.json(books)
})

// DELETE book
router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id)
    res.json({ message: "Book deleted" })
  } catch {
    res.status(500).json({ message: "Error deleting book" })
  }
})


module.exports = router
