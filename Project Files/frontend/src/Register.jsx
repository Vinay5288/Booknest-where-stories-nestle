import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "user"
  })

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/auth/register", form)
    alert("Registered successfully")
    navigate("/login")
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
        <h3 className="text-center mb-3">Register</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <select
            name="role"
            className="form-control mb-3"
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </select>

          <button className="btn btn-dark w-100">Register</button>
        </form>
      </div>
    </div>
  )


}

export default Register
