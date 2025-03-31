// src/components/header.jsx
import React, { useState } from 'react'
import { useAuth } from '../context/authContext' // Auth-Hook importieren
import logoImage from '../assets/head_logo_raglePD.png'
import Modal from './modal'
import NewsletterSubscribe from './newsletterSubscribe'

const Header = () => {
  // Auth-Kontext verwenden
  const { user, logout } = useAuth()
  const [showModal, setShowModal] = useState(false)

  // Funktion zum Ausloggen
  const handleLogout = () => {
    logout()
    window.location.href = '/' // Zur Startseite weiterleiten
  }

  return (
    <header className='py-4 px-8 flex justify-between items-center'>
      {/* Logo links ausgerichtet und kleiner */}
      <img src={logoImage} alt='RAGLE-PD Logo' className='h-7 w-auto' />
      console.log("Header wurde gerendert")
      <button
        onClick={() => setShowModal(true)}
        className='text-sm font-medium text-blue-600 hover:underline'
      >
        Einschreiben für ScienceUpdate
      </button>
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
      {showModal && (
        <Modal
          title='Einschreiben für ScienceUpdate'
          onClose={() => setShowModal(false)}
        >
          <NewsletterSubscribe />
        </Modal>
      )}
    </header>
  )
}

export default Header
