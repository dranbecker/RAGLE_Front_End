// src/components/navigation.jsx - Verbesserte Version
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className='bg-white border-t border-b border-gray-200 mt-0 py-3'>
      <div className='container mx-auto flex justify-center'>
        <ul className='flex space-x-8'>
          <li>
            <Link
              to='/'
              className={`px-4 py-2 rounded-md border transition-colors duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 ${
                location.pathname === '/'
                  ? 'border-blue-600 text-blue-600 font-medium'
                  : 'border-gray-700 text-gray-700'
              }`}
            >
              Startseite
            </Link>
          </li>
          <li>
            <Link
              to='/top-themen'
              className={`px-4 py-2 rounded-md border transition-colors duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 ${
                location.pathname === '/top-themen'
                  ? 'border-blue-600 text-blue-600 font-medium'
                  : 'border-gray-700 text-gray-700'
              }`}
            >
              Top-Themen
            </Link>
          </li>
          <li>
            <Link
              to='/ragle-prime'
              className={`px-4 py-2 rounded-md border transition-colors duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 ${
                location.pathname === '/ragle-prime'
                  ? 'border-blue-600 text-blue-600 font-medium'
                  : 'border-gray-700 text-gray-700'
              }`}
            >
              RAGLE Prime
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
