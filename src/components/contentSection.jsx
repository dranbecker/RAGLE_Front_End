// src/components/ContentSection.jsx
import React from 'react'

/**
 * Eine Layout-Komponente, die einen konsistenten Stil für Inhaltsabschnitte bietet
 *
 * @param {ReactNode} children - Die Kinder-Elemente, die in diesen Abschnitt eingebettet werden
 * @param {string} className - Zusätzliche CSS-Klassen für benutzerdefinierte Anpassungen
 * @returns {JSX.Element} - Die gerenderte ContentSection-Komponente
 */
const ContentSection = ({ children, className = '' }) => {
  return (
    <div className={`bg-gray-100 p-5 rounded-lg shadow-sm mb-6 ${className}`}>
      {children}
    </div>
  )
}

export default ContentSection
