function TaskSummary({ tasks }) {
  const total = tasks.length

  const pending = tasks.filter(
    (task) => task.status === "pending"
  ).length

  const inProgress = tasks.filter(
    (task) => task.status === "in_progress"
  ).length

  const completed = tasks.filter(
    (task) => task.status === "completed"
  ).length

  return (
    <section className="task-summary">
      <div className="summary-card total-card">
        <span className="summary-number">{total}</span>
        <span className="summary-label">Total Tasks</span>
      </div>

      <div className="summary-card pending-card">
        <span className="summary-number">{pending}</span>
        <span className="summary-label">Pending</span>
      </div>

      <div className="summary-card progress-card">
        <span className="summary-number">{inProgress}</span>
        <span className="summary-label">In Progress</span>
      </div>

      <div className="summary-card completed-card">
        <span className="summary-number">{completed}</span>
        <span className="summary-label">Completed</span>
      </div>

    </section>
  )
}

export default TaskSummary