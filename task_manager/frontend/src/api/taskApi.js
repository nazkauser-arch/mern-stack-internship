const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getTasks = async (token) => {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

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