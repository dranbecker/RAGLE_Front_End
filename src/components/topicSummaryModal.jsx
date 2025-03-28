// src/components/topicSummaryModal.jsx
import React, { useState, useEffect } from 'react'

const TopicSummaryModal = ({ isOpen, topic, onClose }) => {
  const [summary, setSummary] = useState('')
  const [questionCount, setQuestionCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isOpen && topic) {
      loadSummary(topic)
    }
  }, [isOpen, topic])

  const loadSummary = async (topicName) => {
    setLoading(true)
    setError(null)
    try {
      // API-Anfrage an den Backend-Endpunkt
      const response = await fetch(
        `/api/topics/summary/${encodeURIComponent(topicName)}`
      )

      if (!response.ok) {
        throw new Error(`HTTP-Fehler! Status: ${response.status}`)
      }

      const data = await response.json()
      console.log('Geladene Zusammenfassung:', data)

      setSummary(data.summary || 'Keine Zusammenfassung verfügbar')
      setQuestionCount(data.questionCount || 0)
    } catch (error) {
      console.error('Fehler beim Laden der Zusammenfassung:', error)
      setError(error.message || 'Unbekannter Fehler')
      setSummary('')
    } finally {
      setLoading(false)
    }
  }

  // Wenn der Modal geschlossen ist, nichts rendern
  if (!isOpen) return null

  // Funktion zum Kopieren der Zusammenfassung
  const copyToClipboard = () => {
    const textToCopy = `
Zusammenfassung: ${topic}
${summary}

Diese Zusammenfassung basiert auf ${questionCount} Fragen der letzten 30 Tage.
Quelle: RAGLE-PD Knowledge Base
    `.trim()

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert('Zusammenfassung wurde in die Zwischenablage kopiert!')
      })
      .catch((err) => {
        console.error('Fehler beim Kopieren in die Zwischenablage:', err)
        alert('Konnte nicht in die Zwischenablage kopieren')
      })
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white rounded-lg max-w-2xl w-full p-6 max-h-[80vh] overflow-auto'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-xl font-medium text-gray-800'>
            Zusammenfassung: {topic}
          </h3>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
            aria-label='Schließen'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <div className='py-2'>
          {loading ? (
            <div className='flex justify-center py-12'>
              <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500'></div>
            </div>
          ) : error ? (
            <div className='bg-red-50 border-l-4 border-red-500 p-4 text-red-700'>
              <p className='font-bold'>Fehler</p>
              <p>{error}</p>
            </div>
          ) : (
            <>
              <div className='prose max-w-none'>
                {/* Wir wandeln Markdown oder einfache Zeilenumbrüche in HTML-Format um */}
                {summary.split('\n').map((paragraph, idx) => (
                  <p key={idx} className='mb-4 text-gray-700 text-left'>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className='mt-6 text-sm text-gray-500 flex items-center justify-between'>
                <span>
                  Basierend auf {questionCount} Fragen der letzten 30 Tage
                </span>
                <button
                  onClick={copyToClipboard}
                  className='text-blue-500 hover:text-blue-700 flex items-center'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 mr-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                    />
                  </svg>
                  Kopieren
                </button>
              </div>
            </>
          )}
        </div>

        <div className='mt-6 flex justify-end'>
          <button
            onClick={onClose}
            className='px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors'
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopicSummaryModal
