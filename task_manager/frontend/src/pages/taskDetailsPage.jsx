import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  getTask,
  deleteTask
} from "../api/taskApi"
import AppHeader from "../components/appHeader"

function TaskDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [task, setTask] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchTask = async () => {
    try {
      setLoading(true)
      setError(false)

      const token = localStorage.getItem("token")

      if (!token) {
        return
      }

      const data = await getTask(id, token)

      setTask(data.data)
    } catch (error) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTask()
  }, [id])

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    )

    if (!confirmed) {
      return
    }

    try {
      const token = localStorage.getItem("token")

      if (!token) {
        return
      }

      await deleteTask(id, token)

      navigate("/tasks")
    } catch (error) {
      console.error(error)
    }
  }

  if (loading) {
    return (
      <>
        <AppHeader />
        <main className="task-details-page">
          <p>Loading task...</p>
        </main>
      </>
    )
  }

  if (error || !task) {
    return (
      <>
        <AppHeader />
        <main className="task-details-page">
          <p>Unable to load task.</p>

          <button onClick={() => navigate("/tasks")}>
            Back to Tasks
          </button>
        </main>
      </>
    )
  }

  return (
    <>
      <AppHeader />

      <main className="task-details-page">

        <button
          className="back-button"
          onClick={() => navigate("/tasks")}
        >
          ← Back to Tasks
        </button>

        <div className="task-details-card">

          <p className="task-id">
            Task ID: {task._id}
          </p>

          <h1>{task.title}</h1>

          <div className="task-detail">
            <strong>Description</strong>
            <p>{task.description}</p>
          </div>

          <div className="task-detail">
            <strong>Status</strong>
            <p>{task.status}</p>
          </div>

          <div className="task-detail">
            <strong>Priority</strong>
            <p>{task.priority}</p>
          </div>

          <div className="task-detail">
            <strong>Due Date</strong>
            <p>{task.dueDate || "No due date"}</p>
          </div>

          <div className="task-actions">

            <button
              onClick={() =>
                navigate(`/tasks/${task._id}/edit`)
              }
            >
              Edit
            </button>

            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>

          </div>

        </div>

      </main>
    </>
  )
}

export default TaskDetailsPage