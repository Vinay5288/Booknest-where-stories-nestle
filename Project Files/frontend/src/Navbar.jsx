import { Link, useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{
      background: "linear-gradient(90deg, #4b6cb7, #182848)"
    }}>
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">BookNest</Link>

        <div>
          {user ? (
            <>
              <Link className="btn btn-light btn-sm me-2" to="/dashboard">Dashboard</Link>
              <Link className="btn btn-light btn-sm me-2" to="/books">Books</Link>

              {user.role === "seller" && (
                <Link className="btn btn-warning btn-sm me-2" to="/add-book">Add Book</Link>
              )}
              {user?.role === "user" && (
                <Link className="btn btn-info btn-sm me-2" to="/cart">
                  Cart
                </Link>
              )}

              <button className="btn btn-danger btn-sm" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-light btn-sm me-2" to="/login">Login</Link>
              <Link className="btn btn-warning btn-sm" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
