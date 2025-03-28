// src/components/Navigation.jsx
import React from 'react'

// Custom-Komponente für den Navigation-Button (wie im vorherigen Beispiel)
const NavButton = ({ href, isActive, children }) => {
  const baseClasses = `
    px-4 py-2
    border rounded-md
    font-medium
    transition-colors duration-300
    hover:bg-blue-600 hover:text-white hover:border-blue-600
  `

  const colorClasses = isActive
    ? 'border-blue-600 text-blue-600'
    : 'border-gray-700 text-gray-700'

  return (
    <li>
      <a href={href} className={`${baseClasses} ${colorClasses}`}>
        {children}
      </a>
    </li>
  )
}

const Navigation = () => {
  const currentPath = window.location.pathname

  // Navigation-Links als Array definieren - so kannst du einfach Links hinzufügen/entfernen
  const navLinks = [
    { path: '/', label: 'Startseite' },
    { path: '/top-themen', label: 'Top-Themen' },
    { path: '/admin', label: 'Admin' },
    { path: '/prime', label: 'RAGLE-PD Prime' },
  ]

  return (
    <nav className='bg-white border-t border-b border-gray-200 mt-0'>
      <div className='container mx-auto flex justify-center py-3'>
        <ul className='flex space-x-8'>
          {navLinks.map((link) => (
            <NavButton
              key={link.path}
              href={link.path}
              isActive={currentPath === link.path}
            >
              {link.label}
            </NavButton>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
