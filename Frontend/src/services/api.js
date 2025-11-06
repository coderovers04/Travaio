const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://travaio-puhl.onrender.com'

async function http(path, { method = 'GET', token, data } = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: data ? JSON.stringify(data) : undefined
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.msg || json.error || 'Request failed')
  return json
}

export const signup = (data) => http('/auth/signup', { method: 'POST', data })
export const login = (data) => http('/auth/login', { method: 'POST', data })
export const me = (token) => http('/auth/me', { token })

export const getTrips = (token) => http('/trip', { token })
export const createTrip = (token, data) => http('/trip', { method: 'POST', token, data })
export const getTrip = (token, id) => http(`/trip/${id}`, { token })
export const sendContact = (data) => http('/api/contact', { method: 'POST', data })
