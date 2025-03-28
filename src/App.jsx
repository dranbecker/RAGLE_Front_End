// src/App.jsx
import React from 'react'
import Header from './components/header'
import HeroSection from './components/hero'
import Navigation from './components/navigation'
import StatistikDashboard from './components/statisticsDashboard'
import MedicalDisclaimer from './components/medicalDisclaimer'
import QuestionAnswer from './components/QuestionAnswer'
import ContentSection from './components/contentSection' // Neue Layout-Komponente
import './App.css'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <HeroSection />
      <Navigation />

      {/* Hauptinhalt mit einheitlichem Layout */}
      <div className='container mx-auto px-4 py-8'>
        {/* Die StatistikDashboard Komponente hat bereits eigenes Styling */}
        <StatistikDashboard />

        {/* MedicalDisclaimer mit ContentSection für einheitliches Layout */}
        <ContentSection>
          <MedicalDisclaimer />
        </ContentSection>

        {/* QuestionAnswer mit ContentSection für einheitliches Layout */}
        <ContentSection>
          <QuestionAnswer />
        </ContentSection>
      </div>
    </div>
  )
}

export default App
