const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getTasks = async (token, filters = {}) => {
  const params = new URLSearchParams()

  if (filters.search) {
    params.append("search", filters.search)
  }

  if (filters.status && filters.status !== "all") {
    params.append("status", filters.status)
  }

  if (filters.priority && filters.priority !== "all") {
    params.append("priority", filters.priority)
  }

  params.append("page", filters.page || 1)
  params.append("limit", filters.limit || 5)

  const response = await fetch(
    `${API_BASE_URL}/tasks?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error?.message || "Failed to fetch tasks")
  }

  return data
}

export const createTask = async (task, token) => {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(task)
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error?.message || "Failed to create task")
  }

  return data
}

export const updateTask = async (id, task, token) => {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(task)
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error?.message || "Failed to update task")
  }

  return data
}

export const deleteTask = async (id, token) => {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error?.message || "Failed to delete task")
  }

  return data
}