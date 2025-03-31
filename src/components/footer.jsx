// src/components/footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear() // Aktuelle Jahreszahl für Copyright

  return (
    <footer className='bg-gray-800 text-gray-300 py-10'>
      <div className='container mx-auto px-4'>
        {/* Footer Hauptinhalt mit drei Spalten */}
        <div className='flex flex-col md:flex-row justify-between text-left max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12'>
          {/* Erste Spalte: Über diesen Dienst */}
          <div className='footer-section basis-1/3 flex-shrink-0'>
            <h3 className='text-xl font-semibold mb-4 text-white text-left'>
              Die RAGLE-PD Plattform
            </h3>
            <p className='text-gray-400 text-left'>
              RAGLE-PD verbindet evidenzbasiertes Wissen mit KI-Technologie und
              schafft damit eine völlig neuartige Ressource für Informationen
              rund um das Thema Parkinson-Krankheit. Die Plattform verarbeitet
              kuratierte Fachliteratur, klinische Leitlinien und
              wissenschaftliche Publikationen, um fundierte und personalisierte
              Expertise bereitzustellen.
            </p>
          </div>

          {/* Zweite Spalte: Rechtliches */}
          <div className='footer-section basis-1/3 flex-shrink-0'>
            <h3 className='text-xl font-semibold mb-4 text-white text-left'>
              Rechtliches
            </h3>
            <ul className='space-y-2'>
              <li className='hover:text-blue-300 transition-colors text-left'>
                <Link to='/impressum'>Impressum</Link>
              </li>
              <li className='hover:text-blue-300 transition-colors text-left'>
                <Link to='/datenschutz'>Datenschutz</Link>
              </li>
              <li className='hover:text-blue-300 transition-colors text-left'>
                <Link to='/nutzungsbedingungen'>Nutzungsbedingungen</Link>
              </li>
            </ul>
          </div>

          {/* Dritte Spalte: Kontakt mit Social Media Icons */}
          <div className='footer-section basis-1/3 flex-shrink-0'>
            <h3 className='text-xl font-semibold mb-4 text-white text-left'>
              Kontakt
            </h3>
            <p className='flex items-center mb-2'>
              <FaEnvelope className='mr-2' /> info@ragle.de
            </p>
            <p className='flex items-center mb-4'>
              <FaPhone className='mr-2' /> +49 621 76228787
            </p>

            {/* Social Media Icons */}
            <div className='flex space-x-4 mt-4'>
              <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-blue-400 transition-colors text-xl'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-pink-400 transition-colors text-xl'
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright-Bereich */}
        <div className='border-t border-gray-700 mt-8 pt-6 text-center'>
          <p>
            &copy; {currentYear} Dr. Andreas Becker, Chief Visionary RAGLE-PD.
            Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
