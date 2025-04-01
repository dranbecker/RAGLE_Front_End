import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/head_logo_raglePD.png'
import Modal from './modal'
import NewsletterSubscribe from './newsletterSubscribe'

const StickyNavigation = () => {
  const [isSticky, setIsSticky] = useState(false)
  const location = useLocation()
  const [showModal, setShowModal] = useState(false)

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
        </div>
      </nav>

      {/* Untere Navigationsleiste */}
      <nav className='bg-gray-700 transition-colors duration-300 border-none'>
        <div className='relative max-w-screen-xl mx-auto'>
          {/* Container für die gesamte Navigationsbar */}
          <div className='flex px-6 py-4'>
            {/* Linke Navigation */}
            <ul className='flex flex-row items-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
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
                    location.pathname === '/ueber-uns'
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

          {/* Rechte Buttons - absolute positioniert */}
          <div className='absolute top-0 right-0 flex items-center space-x-3 h-full pr-6'>
            <button
              onClick={() => setShowModal(true)}
              type='button'
              className='flex items-center gap-2 py-2 px-4 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a1.5 1.5 0 01-2.122 0l-7.5-7.5a2.25 2.25 0 01-.659-1.591V6.75'
                />
              </svg>
              Einschreiben für ScienceUpdate
            </button>

            <Link
              to='/login'
              className='flex items-center gap-2 py-2 px-4 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </nav>
      {showModal && (
        <Modal
          title='Einschreiben für ScienceUpdate'
          onClose={() => setShowModal(false)}
        >
          <NewsletterSubscribe />
        </Modal>
      )}
    </div>
  )
}

export default StickyNavigation
