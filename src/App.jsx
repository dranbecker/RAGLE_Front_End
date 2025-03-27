// src/App.jsx
import React from 'react'
import Header from './components/header'
import HeroSection from './components/heroSection'
import Navigation from './components/navigation'
import './App.css'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <HeroSection />
      <Navigation />
      {/* Weitere Komponenten wie StatistikDashboard etc. */}
    </div>
  )
}

export default App
