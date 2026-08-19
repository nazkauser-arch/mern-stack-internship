import { useNavigate } from "react-router-dom"

function TaskList({ tasks, onComplete }) {
  const navigate = useNavigate()

  if (tasks.length === 0) {
    return <p>No tasks found</p>
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-card" key={task._id}>

          <p className="task-id">
            Task ID: {task._id}
          </p>

          <h3
            className="task-title"
            onClick={() => navigate(`/tasks/${task._id}`)}
          >
            {task.title}
          </h3>

          <div className="task-actions">

            <button
              className="complete-btn"
              onClick={() => onComplete(task._id)}
              disabled={task.status === "completed"}
            >
              {task.status === "completed"
                ? "Completed"
                : "Complete"}
            </button>

          </div>

        </div>
      ))}
    </div>
  )
}

export default TaskList