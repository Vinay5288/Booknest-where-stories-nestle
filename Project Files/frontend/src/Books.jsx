import { useEffect, useState } from "react"
import axios from "axios"

function Books() {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)

  const user = JSON.parse(localStorage.getItem("user"))

  // FETCH BOOKS
  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then(res => {
        setBooks(res.data)
        setFilteredBooks(res.data)
      })
  }, [])

  // SEARCH FILTER
  useEffect(() => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (book.genre || "").toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredBooks(filtered)
  }, [searchTerm, books])

  // SORT
  useEffect(() => {
    let sorted = [...filteredBooks]

    if (sortBy === "title")
      sorted.sort((a, b) => a.title.localeCompare(b.title))

    if (sortBy === "author")
      sorted.sort((a, b) => a.author.localeCompare(b.author))

    if (sortBy === "genre")
      sorted.sort((a, b) => (a.genre || "").localeCompare(b.genre || ""))

    setFilteredBooks(sorted)
  }, [sortBy])

  // ADD TO CART
  const addToCart = (book) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(book)
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Added to cart")
  }

  // DELETE BOOK
  const deleteBook = async (id) => {
    if (window.confirm("Delete this book?")) {
      await axios.delete(`http://localhost:5000/api/books/${id}`)
      setBooks(books.filter(book => book._id !== id))
      setFilteredBooks(filteredBooks.filter(book => book._id !== id))
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Available Books</h2>

      {/* SEARCH + SORT */}
      <div className="d-flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by title, author, or genre"
          className="form-control"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="form-select"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="title">Book Name</option>
          <option value="author">Author Name</option>
          <option value="genre">Genre</option>
        </select>
      </div>

      {/* BOOK CARDS */}
      <div className="row">
        {filteredBooks.map(book => (
          <div className="col-md-4 mb-4" key={book._id}>
            <div
              className="card shadow-sm border-0"
              style={{ cursor: "pointer", transition: "transform 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              onClick={() => setSelectedBook(book)}
            >
              <img
                src={book.image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{book.title}</h5>
                <p className="text-muted">{book.author}</p>

                <span className="badge bg-info me-2">
                  {book.genre || "General"}
                </span>

                <span className="badge bg-success">
                  ${book.price}
                </span>

                <br />

                {user?.role === "user" && (
                  <button
                    className="btn btn-primary btn-sm mt-2 me-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      addToCart(book)
                    }}
                  >
                    Add to Cart
                  </button>
                )}

                {user?.role === "seller" && (
                  <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteBook(book._id)
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DETAILS MODAL */}
      {selectedBook && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={() => setSelectedBook(null)}
        >
          <div className="card p-4" style={{ width: "400px" }} onClick={e => e.stopPropagation()}>
            <img
              src={selectedBook.image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
              className="card-img-top mb-3"
              style={{ height: "200px", objectFit: "cover" }}
            />

            <h4>{selectedBook.title}</h4>
            <p className="text-muted">{selectedBook.author}</p>

            <p><b>Genre:</b> {selectedBook.genre || "General"}</p>
            <p><b>Price:</b> ${selectedBook.price}</p>

            <p><b>Synopsis:</b></p>
            <p className="text-muted">
              {selectedBook.synopsis || "No synopsis available"}
            </p>

            <button className="btn btn-dark mt-2" onClick={() => setSelectedBook(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Books