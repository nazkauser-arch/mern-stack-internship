import { useState } from "react"
import { login } from "../api/authApi"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await login(email, password)
      localStorage.setItem("token", data.data.token)
    console.log("LOGIN RESPONSE:", data)
    console.log("TOKEN:", data.data?.token)    
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  )
}

//export default Login