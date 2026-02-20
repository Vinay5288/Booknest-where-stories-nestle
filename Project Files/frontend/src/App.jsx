import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./Login"
import Register from "./Register"
import Dashboard from "./Dashboard"
import Books from "./Books"
import AddBook from "./AddBook"
import Footer from "./Footer"
import Cart from "./Cart"

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Navbar />

      {/* Main Content */}
      <div style={{ flex: 1 }} className="container mt-5">
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  minHeight: "60vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(120deg, #84fab0, #8fd3f4)",
                  borderRadius: "10px"
                }}
              >
                <div className="text-center">
                  <h1 className="fw-bold display-4 text-dark">
                    Discover Your Next Book 📚
                  </h1>
                  <p className="text-muted">
                    A premium digital bookstore experience
                  </p>
                </div>
              </div>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
