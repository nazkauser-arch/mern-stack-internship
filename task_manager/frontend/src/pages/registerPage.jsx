import { useState } from "react"
import { register } from "../api/authApi"
import { Link, useNavigate} from "react-router-dom"
import AppHeader from "../components/appHeader"

function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      const data = await register(name, email, password)
      console.log(data)
      navigate("/login")
    } catch (error) {
      console.error(error)
      setError(error.message || "Registration failed")
    }
  }

  return (
    <>
    <AppHeader />

      <main className="auth-page">
        <form onSubmit={handleSubmit}>
          <h1>Task Flow</h1>
          <h3>Plan it. Do it.</h3>

          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Re-enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <p>
            <button type="submit">Register</button>
          </p>

          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </main>
    </>
  )
}

export default RegisterPage