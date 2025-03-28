// src/pages/NotFound.jsx
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='container mx-auto px-4 py-32 text-center'>
      <h1 className='text-4xl font-bold mb-4'>404 - Seite nicht gefunden</h1>
      <p className='text-xl mb-8'>Die gesuchte Seite existiert leider nicht.</p>
      <Link
        to='/'
        className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Zurück zur Startseite
      </Link>
    </div>
  )
}

export default NotFound
