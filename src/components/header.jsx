// src/components/header.jsx
import React from 'react'
import { useAuth } from '../context/authContext' // Auth-Hook importieren
import logoImage from '../assets/head_logo_raglePD.png'

const Header = () => {
  // Auth-Kontext verwenden
  const { user, logout } = useAuth()

  // Funktion zum Ausloggen
  const handleLogout = () => {
    logout()
    window.location.href = '/' // Zur Startseite weiterleiten
  }

  return (
    <header className='py-4 px-8 flex justify-between items-center'>
      {/* Logo links ausgerichtet und kleiner */}
      <img src={logoImage} alt='RAGLE-PD Logo' className='h-7 w-auto' />

      {/* Benutzerbereich und Logout-Button nur anzeigen, wenn angemeldet */}
      {user && (
        <div className='flex items-center space-x-4'>
          <span className='text-sm text-gray-600'>
            Angemeldet als: <span className='font-medium'>{user.email}</span>
          </span>
          <button
            onClick={handleLogout}
            className='px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm transition-colors'
          >
            Abmelden
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
