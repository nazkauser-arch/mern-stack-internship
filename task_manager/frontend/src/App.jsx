import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import TaskSummary from './components/TaskSummary'
import Login from './components/login'
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from './api/taskApi'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("all")
  const [priority, setPriority] = useState("all")
  const [page, setPage] = useState(1)
  const [limit] = useState(2)
  const [pagination, setPagination] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchTasks = async () => {
    try {
      setLoading(true)
        setError(false)

        //to test error loading tasks
        //throw new Error("Test error")


        const token = localStorage.getItem('token')

        if (!token) {
          return
        }

        const data = await getTasks(token,{
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

  useEffect(() => {
    fetchTasks()
  }, [search, status, priority, page, limit])

  const handleAddTask = async (newTask) => {
    try {
      const token = localStorage.getItem('token')

      if (!token) {
        return
      }

      const data = await createTask(newTask, token)

      setTasks((prevTasks) => [...prevTasks, data.data])
    } catch (error) {
      console.error(error)
    }
  }

  const handleComplete = async (id) => {
    try {
      const token = localStorage.getItem('token')

      if (!token) {
        return
      }

      const data = await updateTask(
        id,
        { status: 'completed' },
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

const handleDelete = async (id) => {
    const confirmed = window.confirm(
    "Are you sure you want to delete this task?"
  )

  if (!confirmed) {
    return
  }
  
  try {
    const token = localStorage.getItem('token')

    if (!token) {
      return
    }

    await deleteTask(id, token)

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task._id !== id)
    )
  } catch (error) {
    console.error(error)
  }
}

  const filteredTasks =
    filter === 'all'
      ? tasks
      : tasks.filter((task) => task.status === filter)

  return (
    <div>
      <Login />
      <TaskForm onAddTask={handleAddTask} />

      <br />
      <TaskFilter
        status={status}
        priority={priority}
        onStatusChange={(value) => {
          setStatus(value)
          setPage(1)
        }}
        onPriorityChange={(value) => {
          setPriority(value)
          setPage(1)
        }}
      />

      {loading ?(
        <p>Loading tasks...</p>
      ) : error ? (
        <div>
          <p>Unable to load tasks. Pleae try again.</p>

        <button onClick={fetchTasks}>
          Retry
        </button>
      </div>
      ) : tasks.length === 0 ? (
        <p>
          {status !== "all" || priority !== "all" || search
          ? "No tasks match the selected filters."
        : "No tasks have been created yet."}
        </p>
      ) : (   
      <TaskList
        tasks={filteredTasks}
        //hasFilter={status !== "all" || priority !== "all" || search !== ""}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
      )}
      <div>
  <button
    onClick={() => setPage((prev) => prev - 1)}
    disabled={page === 1}
  >
    Previous
  </button>

  <span> Page {page} </span>

  <button
    onClick={() => setPage((prev) => prev + 1)}
    disabled={pagination.totalPages && page >= pagination.totalPages}
  >
    Next
  </button>
</div>
      <TaskSummary tasks={tasks} />
    </div>
  )
}

export default App