import TaskList from './components/TaskList'
import {initialTasks} from './data/tasks'

function App() {
  const handleComplete = (id) => {
    console.log("Complete task:", id)
  }

  const handleDelete = (id) => {
    console.log("Delete task:", id)
  }

  return (
    <div>
      <TaskList
        tasks={initialTasks}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App