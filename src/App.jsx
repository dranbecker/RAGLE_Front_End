// src/App.jsx (Angepasst)
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import StickyNavbar from './components/StickyNavbar' // Importiere die neue Navbar
import HeroSection from './components/hero'
import StatistikDashboard from './components/statisticsDashboard'
import MedicalDisclaimer from './components/medicalDisclaimer'
import QuestionAnswer from './components/questionAnswer'
import ContentSection from './components/contentSection'
import TopThemen from './pages/topThemen'
import RaglePrime from './pages/raglePrime'
import Login from './pages/login'
import NotFound from './pages/notFound'
import Footer from './components/footer'
import Impressum from './pages/impressum'
import Datenschutz from './pages/datenschutz'
import Nutzungsbedingungen from './pages/nutzungsbedingungen'
import UeberUns from './pages/ueberUns'
import { AuthProvider, useAuth } from './context/authContext'
import './App.css'

// Geschützte Route Komponente
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className='flex justify-center items-center h-[50vh]'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to='/login' replace />
  }

  return children
}

// Homepage-Komponente
// Homepage-Komponente
function Home() {
  return (
    <div>
      {' '}
      {/* Platz für die StickyNavbar einplanen */}
      <HeroSection />
      <div className='container mx-auto px-4 py-8'>
        <StatistikDashboard />
        <ContentSection>
          <MedicalDisclaimer />
        </ContentSection>
        <ContentSection>
          <QuestionAnswer />
        </ContentSection>
      </div>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='min-h-screen bg-white flex flex-col'>
          {/* Füge die Sticky-Navbar an dieser Stelle ein */}
          <StickyNavbar />

          {/* Hauptinhalt mit Abstand zum Navbar */}
          <div className='flex-grow pt-[112px]'>
            {' '}
            {/* mt-16 für Abstand zur Sticky-Navbar */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/top-themen' element={<TopThemen />} />
              <Route
                path='/ragle-prime'
                element={
                  <ProtectedRoute>
                    <RaglePrime />
                  </ProtectedRoute>
                }
              />
              <Route path='/login' element={<Login />} />

              <Route path='/ueber-uns' element={<UeberUns />} />

              {/* Neue Routen für rechtliche Seiten */}
              <Route path='/impressum' element={<Impressum />} />
              <Route path='/datenschutz' element={<Datenschutz />} />
              <Route
                path='/nutzungsbedingungen'
                element={<Nutzungsbedingungen />}
              />

              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          {/* Footer-Komponente am Ende */}
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
