// src/App.jsx
import React from 'react'
import Header from './components/header'
import HeroSection from './components/hero'
import Navigation from './components/navigation'
import StatistikDashboard from './components/statisticsDashboard'
import MedicalDisclaimer from './components/medicalDisclaimer'
import './App.css'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <HeroSection />
      <Navigation />
      {/* Container für die Statistik mit Abständen */}
      <div className='container mx-auto px-4 py-8'>
        <StatistikDashboard />
        <MedicalDisclaimer />
        {/* Weitere Komponenten hier */}
      </div>

      {/* Weitere Komponenten wie StatistikDashboard etc. */}
    </div>
  )
}

export default App
