function TaskSummary({tasks}) {
  const totalTasks = tasks.length

  const pendingTasks = tasks.filter(
    (task) => task.status === 'pending'
  ).length

  const inProgressTasks = tasks.filter(
    (task) => task.status === 'in_progress'
  ).length

  const completedTasks = tasks.filter(
    (task) => task.status === 'completed'
  ).length

  return (
    <div>
      <p>Total tasks: {totalTasks}</p>
      <p>Pending tasks: {pendingTasks}</p>
      <p>In-progress tasks: {inProgressTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
    </div>
  )
}

export default TaskSummary