// src/pages/Login.jsx (aktualisiert)
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ContentSection from '../components/contentSection'
import { useAuth } from '../context/authContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login, user } = useAuth()

  // Wenn der Benutzer bereits eingeloggt ist, umleiten
  useEffect(() => {
    if (user) {
      navigate('/ragle-prime')
    }
  }, [user, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { success, error } = await login(email, password)

      if (success) {
        navigate('/ragle-prime')
      } else {
        setError(error?.message || 'Login fehlgeschlagen')
      }
    } catch (err) {
      setError('Ein unerwarteter Fehler ist aufgetreten')
      console.error('Login-Fehler:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex min-h-[calc(100vh-200px)] items-center justify-center'>
      <ContentSection className='max-w-md w-full'>
        <h1 className='text-2xl font-bold mb-6 text-center'>
          RAGLE Prime Login
        </h1>

        {error && (
          <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4'>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              E-Mail
            </label>
            <input
              id='email'
              type='email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='example@mail.com'
            />
          </div>

          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Passwort
            </label>
            <input
              id='password'
              type='password'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='********'
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
              type='submit'
              disabled={loading}
            >
              {loading ? 'Lädt...' : 'Anmelden'}
            </button>
          </div>
        </form>

        {/* Testbenutzer-Info für Entwicklung */}
        <div className='mt-8 pt-4 border-t text-sm text-gray-500'>
          <p className='font-bold'>Testbenutzer:</p>
          <p>Admin: admin@example.com / password</p>
          <p>Prime: prime@example.com / password</p>
        </div>
      </ContentSection>
    </div>
  )
}

export default Login
