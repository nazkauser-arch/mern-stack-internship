import { Link } from "react-router-dom"

function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div
      className="task-card"
      style={{ textAlign: "right" }}
    >
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
      <Link to={`/tasks/${task._id}/edit`}>
        <button type="button">
          Edit
        </button>
      </Link>
    </div>
  )
}

export default TaskCard