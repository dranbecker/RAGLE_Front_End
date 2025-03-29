// src/components/StickyNavigation.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/head_logo_raglePD.png'

const StickyNavigation = () => {
  const [isSticky, setIsSticky] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`w-full fixed top-0 z-50 bg-gray-800 shadow-md transition-shadow duration-300 ${
        isSticky ? 'opacity-100' : 'opacity-95'
      }`}
    >
      {/* Obere Navigationsleiste */}
      <nav className='transition-colors duration-300'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img src={logoImg} className='h-8' alt='RAGLE Logo' />
          </Link>
          <div className='flex items-center space-x-6 rtl:space-x-reverse'>
            <a
              href='tel:+496221884010'
              className='text-sm text-gray-300 hover:text-white hover:underline'
            >
              +49 6221 88 4010
            </a>
            <Link
              to='/login'
              className='text-sm text-blue-400 hover:text-blue-300 hover:underline'
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Untere Navigationsleiste */}
      <nav className='bg-gray-700 transition-colors duration-300 border-none'>
        <div className='max-w-screen-xl px-4 py-3 mx-auto'>
          <div className='flex items-center'>
            <ul className='flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
              <li>
                <Link
                  to='/'
                  className={`${
                    location.pathname === '/'
                      ? 'text-blue-400 underline'
                      : 'text-white'
                  } hover:underline`}
                  aria-current={location.pathname === '/' ? 'page' : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/top-themen'
                  className={`${
                    location.pathname === '/top-themen'
                      ? 'text-blue-400 underline'
                      : 'text-white'
                  } hover:underline`}
                  aria-current={
                    location.pathname === '/top-themen' ? 'page' : undefined
                  }
                >
                  Top-Themen
                </Link>
              </li>
              <li>
                <Link
                  to='/ragle-prime'
                  className={`${
                    location.pathname === '/ragle-prime'
                      ? 'text-blue-400 underline'
                      : 'text-white'
                  } hover:underline`}
                  aria-current={
                    location.pathname === '/ragle-prime' ? 'page' : undefined
                  }
                >
                  RAGLE Prime
                </Link>
              </li>
              <li>
                <Link
                  to='/ueber-uns'
                  className={`${
                    location.pathname === '/uber-uns'
                      ? 'text-blue-400 underline'
                      : 'text-white'
                  } hover:underline`}
                  aria-current={
                    location.pathname === '/ueber-uns' ? 'page' : undefined
                  }
                >
                  Über uns
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default StickyNavigation
