import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function AppHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const { logout, user } = useAuth()

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register"

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    navigate("/login")
  }

  if (isAuthPage) {
    return (
      <header className="app-header">
        <h2>Task Flow</h2>
      </header>
    )
  }

  return (
    <header className="app-header">

      <h2>Task Flow</h2>

      <div className="header-actions">

        <button
          className="create-task-btn"
          onClick={() => navigate("/tasks/create")}
        >
          Create Task
        </button>

        <div className="user-menu">

          <button
            className="user-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {user?.name || "Account"} ▼
          </button>

          {isOpen && (
            <div className="dropdown-menu">

              <button onClick={handleLogout}>
                Logout
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  )
}

export default AppHeader