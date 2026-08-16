import TaskCard from './TaskCard'

function TaskList({tasks, hasFilter, onComplete, onDelete}) {
  if (tasks.length === 0) {
    return <p>
      {hasFilter
      ? "No tasks match the selected filter."
      : "No tasks have been created yet."
      }
    </p>
  }

  return (
    <form>
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
    </form>
  )
}

export default TaskList