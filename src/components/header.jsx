// src/components/header.jsx
import React from 'react'
import logoImage from '../assets/head_logo_raglePD.png'

const Header = () => {
  return (
    <header className='py-4 text-center'>
      <div className='container mx-auto px-4'>
        <img
          src={logoImage}
          alt='RAGLE-PD Logo'
          className='h-16 w-auto mx-auto'
        />
      </div>
    </header>
  )
}

export default Header
