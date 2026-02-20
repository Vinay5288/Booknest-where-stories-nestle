import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: "", password: "" })
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setMessage("")

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      )

      localStorage.setItem("user", JSON.stringify(res.data))

      setMessage("Login successful! Redirecting...")

      setTimeout(() => {
        navigate("/")
      }, 1500)

    } catch (err) {
      setError("Email or password is incorrect")
    }
  }

  return (
    <div
      style={{
        background: "linear-gradient(120deg, #f6d365, #fda085)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Login</h3>

        {message && (
          <div className="alert alert-success text-center">
            {message}
          </div>
        )}

        {error && (
          <div className="alert alert-danger text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button className="btn btn-dark w-100">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login