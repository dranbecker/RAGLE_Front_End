import { useState } from 'react'

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setError('Bitte eine gültige E-Mail-Adresse eingeben.')
      return
    }

    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setSubmitted(true)
        setError('')
      } else {
        const data = await res.json()
        setError(data.message || 'Ein Fehler ist aufgetreten.')
      }
    } catch (err) {
      console.error('Newsletter-Anmeldung fehlgeschlagen:', err) // Optional für Konsole
      setError('Verbindung fehlgeschlagen.')
    }
  }

  return (
    <div className='newsletter-subscribe'>
      {submitted ? (
        <p>Vielen Dank für deine Anmeldung!</p>
      ) : (
        <>
          <p className='text-sm text-gray-600 dark:text-gray-300 mb-4'>
            Erhalte regelmäßig wissenschaftliche Zusammenfassungen zu Parkinson,
            Lewy-Körper-Demenz, Multisystematrophie und verwandten
            Bewegungsstörungen – kuratiert, aktuell, kompakt.
          </p>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor='email'
              className='block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200'
            >
              E-Mail-Adresse für dein ScienceUpdate:
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Deine E-Mail-Adresse'
              required
              className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:border-gray-600'
            />
            <button
              type='submit'
              className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200'
            >
              Jetzt einschreiben
            </button>
            {error && <p className='text-sm text-red-500 mt-2'>{error}</p>}
          </form>
        </>
      )}
    </div>
  )
}
