import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createTask } from "../api/taskApi"
import AppHeader from "../components/appHeader"

function CreateTaskPage() {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("pending")
  const [priority, setPriority] = useState("low")
  const [dueDate, setDueDate] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const token = localStorage.getItem("token")

      if (!token) {
        navigate("/login")
        return
      }

      await createTask(
        {
          title,
          description,
          status,
          priority,
          dueDate
        },
        token
      )

      navigate("/tasks")
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
          <h1>Create Task</h1>

          <label>Title:</label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description:</label>
          <textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <label>Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          {error && <p>{error}</p>}

          <button type="submit">
            Create Task
          </button>

          <button
            type="button"
            onClick={() => navigate("/tasks")}
          >
            Cancel
          </button>
        </form>
      </main>
    </>
  )
}

export default CreateTaskPage