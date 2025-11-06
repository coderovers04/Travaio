import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { me } from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('travaio_token') || '')
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('travaio_user') || 'null') } catch { return null }
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!token) return
    setLoading(true)
    me(token).then(u => {
      setUser(u)
      localStorage.setItem('travaio_user', JSON.stringify(u))
    }).catch(() => {
      localStorage.removeItem('travaio_token')
      localStorage.removeItem('travaio_user')
      setToken('')
      setUser(null)
    }).finally(() => setLoading(false))
  }, [token])

  const value = useMemo(() => ({
    token,
    user,
    loading,
    login(token, user) {
      setToken(token)
      setUser(user)
      localStorage.setItem('travaio_token', token)
      localStorage.setItem('travaio_user', JSON.stringify(user))
    },
    logout() {
      localStorage.removeItem('travaio_token')
      localStorage.removeItem('travaio_user')
      setToken('')
      setUser(null)
    }
  }), [token, user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
