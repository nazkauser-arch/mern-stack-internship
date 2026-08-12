import TaskCard from './TaskCard'

function TaskList({tasks, onComplete, onDelete}) {
  if (tasks.length === 0) {
    return <p>No tasks available.</p>
  }

  return (
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
  )
}

export default TaskList