import { useState } from "react"
import axios from "axios"

function AddBook() {
  const [book, setBook] = useState({
  title: "",
  author: "",
  price: "",
  image: "",
  synopsis: "",
  genre: ""
})



  const handleChange = e =>
    setBook({ ...book, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/books", book)
    alert("Book added")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" className="form-control mb-2" onChange={handleChange}/>
      <input name="author" placeholder="Author" className="form-control mb-2" onChange={handleChange}/>
      <input name="price" placeholder="Price" className="form-control mb-2" onChange={handleChange}/>
      <input
  name="genre"
  placeholder="Genre (e.g. Fiction, Business, Fantasy)"
  className="form-control mb-2"
  onChange={handleChange}
/>

      <input
        name="image"
        placeholder="Image URL (optional)"
        className="form-control mb-2"
        onChange={handleChange}
      />
      <textarea
        name="synopsis"
        placeholder="Book Synopsis"
        className="form-control mb-2"
        rows="3"
        onChange={handleChange}
      />

      <button className="btn btn-dark">Add Book</button>
    </form>
  )
}

export default AddBook
