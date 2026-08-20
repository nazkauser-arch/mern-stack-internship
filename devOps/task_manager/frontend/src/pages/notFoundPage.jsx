import { useNavigate } from "react-router-dom"
import AppHeader from "../components/appHeader"

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <>
      <AppHeader />

      <main className="not-found-page">
        <div className="not-found-card">
          <h1>404</h1>

          <h2>Page Not Found</h2>

          <p>
            Sorry, the page you are looking for does not exist.
          </p>

          <button onClick={() => navigate("/tasks")}>
            Back to Tasks
          </button>
        </div>
      </main>
    </>
  )
}

export default NotFoundPage