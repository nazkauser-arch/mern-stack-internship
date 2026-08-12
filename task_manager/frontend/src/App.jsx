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

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token')

        if (!token) {
          return
        }

        const data = await getTasks(token)
        setTasks(data.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTasks()
  }, [])

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
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
      <TaskSummary tasks={tasks} />
    </div>
  )
}

export default App