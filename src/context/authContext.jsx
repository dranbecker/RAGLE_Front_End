// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react'

// Auth-Kontext erstellen
const AuthContext = createContext(null)

// Hook für einfachen Zugriff auf den Auth-Kontext
export function useAuth() {
  return useContext(AuthContext)
}

// Auth-Provider-Komponente
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [loading, setLoading] = useState(true)

  console.log('AuthProvider wird gerendert, aktueller Zustand:', {
    user,
    userRole,
    loading,
  })

  // Simulierter Authentifizierungs-Check beim Laden
  useEffect(() => {
    console.log('AuthProvider useEffect wird ausgeführt')
    // Prüfen, ob es einen gespeicherten User im localStorage gibt
    const savedUser = localStorage.getItem('ragle_user')
    console.log('Gespeicherter User:', savedUser)

    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser)
        console.log('Gespeicherter User geparst:', parsedUser)
        setUser(parsedUser)
        setUserRole(parsedUser.role)
      } catch (error) {
        console.error('Fehler beim Laden des gespeicherten Benutzers:', error)
      }
    }

    setLoading(false)
  }, [])

  // Login-Funktion
  const login = async (email, password) => {
    // Simulierter Login für Entwicklungszwecke
    // In der realen Anwendung würde hier die Supabase-Authentication verwendet werden

    if (email === 'admin@example.com' && password === 'password') {
      const userData = {
        id: '1',
        email,
        role: 'admin',
        name: 'Admin Benutzer',
      }

      setUser(userData)
      setUserRole('admin')
      localStorage.setItem('ragle_user', JSON.stringify(userData))

      return { success: true }
    } else if (email === 'prime@example.com' && password === 'password') {
      const userData = {
        id: '2',
        email,
        role: 'prime',
        name: 'Prime Benutzer',
      }

      setUser(userData)
      setUserRole('prime')
      localStorage.setItem('ragle_user', JSON.stringify(userData))

      return { success: true }
    }

    return {
      success: false,
      error: { message: 'Ungültige Anmeldedaten' },
    }
  }

  // Logout-Funktion
  const logout = () => {
    setUser(null)
    setUserRole(null)
    localStorage.removeItem('ragle_user')
    return { success: true }
  }

  // Auth-Kontext-Wert
  const value = {
    user,
    userRole,
    loading,
    login,
    logout,
    isAdmin: userRole === 'admin',
    isPrimeMember: userRole === 'prime' || userRole === 'admin',
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
