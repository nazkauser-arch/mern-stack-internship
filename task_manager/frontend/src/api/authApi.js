const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.error?.message || "Login failed"
    )
  }

  return data
}

export const register = async (name, email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.error?.message || "Registration failed"
    )
  }

  return data
}

export const getCurrentUser = async (token) => {
  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.error?.message || "Session expired"
    )
  }

  return data
}