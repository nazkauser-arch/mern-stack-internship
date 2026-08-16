function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div>
      <p>ID: {task._id}</p>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>

      <button onClick={() => onComplete(task._id)}>
        Complete
      </button>

      <button onClick={() => onDelete(task._id)}>
        Delete
      </button>
    </div>
  )
}

export default TaskCard