import { createContext, useEffect, useState } from "react"
import {
  login as loginApi,
  getCurrentUser
} from "../api/authApi"

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token")
  )

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = async (email, password) => {
    const data = await loginApi(email, password)

    const newToken = data.data.token
    const userData = data.data.user

    localStorage.setItem("token", newToken)

    setToken(newToken)
    setUser(userData)

    return data
  }

  const logout = () => {
    localStorage.removeItem("token")

    setToken(null)
    setUser(null)
  }

  useEffect(() => {
    const restoreSession = async () => {
      const storedToken = localStorage.getItem("token")

      if (!storedToken) {
        setLoading(false)
        return
      }

      try {
        const data = await getCurrentUser(storedToken)

        setToken(storedToken)
        setUser(data.data)
      } catch (error) {
        console.error("Session restore failed:", error)

        localStorage.removeItem("token")

        setToken(null)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    restoreSession()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!token && !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider