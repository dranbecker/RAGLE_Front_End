// src/components/header.jsx
import React from 'react'
import logoImage from '../assets/head_logo_raglePD.png' // Passe den Pfad an

const Header = () => {
  return (
    <header className='py-4 px-8'>
      {/* Logo links ausgerichtet und kleiner */}
      <img src={logoImage} alt='RAGLE-PD Logo' className='h-7 w-auto' />
    </header>
  )
}
export default Header
