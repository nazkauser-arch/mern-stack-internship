import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import TaskSummary from './components/TaskSummary'
import { initialTasks } from './data/tasks'

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const handleComplete = (id) => {
    console.log("Complete task:", id)
  }

  const handleDelete = (id) => {
    console.log("Delete task:", id)
  }

  const filteredTasks =
    filter === 'all'
      ? tasks
      : tasks.filter((task) => task.status === filter)

  return (
    <div>
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