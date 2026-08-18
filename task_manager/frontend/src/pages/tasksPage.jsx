import { useState, useEffect } from "react"
import TaskList from "../components/TaskList"
import TaskFilter from "../components/TaskFilter"
import TaskSummary from "../components/TaskSummary"
import AppHeader from "../components/appHeader"
import {
  getTasks,
  updateTask
} from "../api/taskApi"

function TasksPage() {
  const [tasks, setTasks] = useState([])
  const [status, setStatus] = useState("all")
  const [priority, setPriority] = useState("all")
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [limit] = useState(5)
  const [pagination, setPagination] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [allTasks, setAllTasks] = useState([])

  const fetchTasks = async () => {
    try {
      setLoading(true)
      setError(false)

      const token = localStorage.getItem("token")

      if (!token) {
        return
      }

      const data = await getTasks(token, {
        search,
        status,
        priority,
        page,
        limit
      })

      setTasks(data.data)
      setPagination(data.pagination)
    } catch (error) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const fetchAllTasks = async () => {
  try {
    const token = localStorage.getItem("token")

    if (!token) {
      return
    }

    const data = await getTasks(token, {
      search,
      status,
      priority,
      page: 1,
      limit: 1000
    })

    setAllTasks(data.data)
  } catch (error) {
    console.error(error)
  }
}

  useEffect(() => {
    fetchTasks()
    fetchAllTasks()
  }, [search, status, priority, page, limit])

  const handleComplete = async (id) => {
    try {
      const token = localStorage.getItem("token")

      if (!token) {
        return
      }

      const data = await updateTask(
        id,
        { status: "completed" },
        token
      )

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? data.data : task
        )
      )
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <AppHeader />

      <main className="tasks-page">

        <section className="tasks-content">

          <aside className="task-filter">
            <TaskFilter
              status={status}
              priority={priority}
              search={search}
              onSearchChange={(value) => {
                setSearch(value)
                setPage(1)
              }}
              onStatusChange={(value) => {
                setStatus(value)
                setPage(1)
              }}
              onPriorityChange={(value) => {
                setPriority(value)
                setPage(1)
              }}
            />
          </aside>

          <section className="task-list-section">

            <div className="task-list-container">
              {loading ? (
                <p>Loading tasks...</p>
              ) : error ? (
                <div>
                  <p>Unable to load tasks. Please try again.</p>

                  <button onClick={fetchTasks}>
                    Retry
                  </button>
                </div>
              ) : (
                <TaskList
                  tasks={tasks}
                  onComplete={handleComplete}
                />
              )}
            </div>

            <div className="pagination">

              <button
                onClick={() => setPage((prev) => prev - 1)}
                disabled={page === 1}
              >
                Previous
              </button>

              <span>Page {page}</span>

              <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={
                  !pagination.totalPages ||
                  page >= pagination.totalPages
                }
              >
                Next
              </button>

            </div>

          </section>

          <div className="right-space"></div>

        </section>

        <footer className="task-summary">
          <TaskSummary tasks={allTasks} />
        </footer>

      </main>
    </>
  )
}

export default TasksPage