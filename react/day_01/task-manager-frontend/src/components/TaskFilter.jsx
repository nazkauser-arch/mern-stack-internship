function TaskFilter({ onFilterChange }) {
  return (
    <div>
        <h1>Filter Tasks</h1>
      <button onClick={() => onFilterChange('all')}>
        All
      </button>

      <button onClick={() => onFilterChange('pending')}>
        Pending
      </button>

      <button onClick={() => onFilterChange('in_progress')}>
        In Progress
      </button>

      <button onClick={() => onFilterChange('completed')}>
        Completed
      </button>
    </div>
  )
}

export default TaskFilter