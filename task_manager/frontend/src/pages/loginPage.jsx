import { useState } from "react"
import { Link } from "react-router-dom"
import { login } from "../api/authApi"
import AppHeader from "../components/appHeader"
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const data = await login(email, password)

      localStorage.setItem("token", data.data.token)

      navigate("/tasks")

      console.log(data)
    } catch (error) {
      console.error(error)
      setError(error.message)
    }
  }

  return (
    <>
    <AppHeader />
      <main className="auth-page">
        <form onSubmit={handleSubmit}>
          <h1>Welcome to Task Flow</h1>
          <h3>Plan it. Do it.</h3>

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p>{error}</p>}

          <p>
            <button type="submit">Login</button>
          </p>

          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </main>
      </>
  )
}

export default LoginPage