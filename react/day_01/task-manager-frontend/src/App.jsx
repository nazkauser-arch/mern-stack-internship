import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { initialTasks } from './data/tasks'

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const handleComplete = (id) => {
    console.log("Complete task:", id)
  }

  const handleDelete = (id) => {
    console.log("Delete task:", id)
  }

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App