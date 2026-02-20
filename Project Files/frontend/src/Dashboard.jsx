function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-primary">Welcome back, {user.username}</h2>
        <p className="text-muted">Role: {user.role}</p>
      </div>
    </div>
  )
}

export default Dashboard
