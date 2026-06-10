import { createContext, useState, useContext } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('admin_token')
    const stored = localStorage.getItem('admin_user')
    if (token && stored) {
      try { return JSON.parse(stored) } catch { return null }
    }
    return null
  })

  function login(token, userData) {
    localStorage.setItem('admin_token', token)
    localStorage.setItem('admin_user', JSON.stringify(userData))
    setUser(userData)
  }

  function logout() {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
