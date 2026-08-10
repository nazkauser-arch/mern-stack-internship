function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div>
      <p>ID: {task.id}</p>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>

      <button onClick={() => onComplete(task.id)}>
        Complete
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  )
}

export default TaskCard