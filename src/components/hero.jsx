// src/components/heroSection.jsx
import React from 'react'

const HeroSection = () => {
  return (
    <div className='container mx-auto px-4 py-8 text-center'>
      {/* Zitat */}
      <blockquote className='text-lg md:text-xl mb-4 max-w-4xl mx-auto'>
        "RAGLE-PD ist mehr als ein Zugang zu Wissen – es ist eine Plattform, auf
        der aus Fragen Wissen entsteht und aus Antworten Lernen wird..."
      </blockquote>

      <p className='text-sm mb-8'>
        — Dr. Andreas Becker, Neurologist & Chief Visionary, RAGLE-PD
      </p>

      {/* Hauptüberschrift */}
      <h1 className='text-3xl md:text-4xl font-bold mb-2'>
        Fortschritt braucht neue Wege..
      </h1>
      <h2 className='text-2xl md:text-3xl font-bold mb-6'>
        Wir brauchen dich.
      </h2>

      {/* Beschreibungstext */}
      <p className='text-base md:text-lg mb-8 max-w-4xl mx-auto'>
        Mit RAGLE wird spezialisiertes Wissen zu Parkinson intelligenter,
        zugänglicher und relevanter. Unterstütze die Entwicklung einer
        Plattform, die nicht nur Antworten liefert, sondern den medizinischen
        Dialog neu denkt.
      </p>

      {/* CTA Button */}
      <a
        href='#spenden'
        className='inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition-colors'
      >
        Jetzt unterstützen
      </a>
    </div>
  )
}

export default HeroSection
