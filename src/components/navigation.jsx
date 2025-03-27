// src/components/navigation.jsx
import React from 'react'

const Navigation = () => {
  return (
    <nav className='bg-white border-t border-b border-gray-200 mt-6'>
      <div className='container mx-auto flex justify-center py-2'>
        <ul className='flex space-x-4'>
          <li>
            <a
              href='/'
              className='font-medium text-blue-600 hover:text-blue-800'
            >
              Startseite
            </a>
          </li>
          <li>
            <a
              href='/top-themen'
              className='font-medium text-gray-700 hover:text-blue-600'
            >
              Top-Themen
            </a>
          </li>
          <li>
            <a
              href='/admin'
              className='font-medium text-gray-700 hover:text-blue-600'
            >
              Admin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
