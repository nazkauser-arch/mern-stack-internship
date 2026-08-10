function TaskFilter({ onFilterChange }) {
  return (
    <div>
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