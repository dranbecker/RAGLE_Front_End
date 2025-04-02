// src/components/QuestionAnswer.jsx
import React, { useState, useRef } from 'react'
import FeedbackButtons from './feedbackButton'

// Produktion oder Entwicklung
const API_BASE = import.meta.env.VITE_API_BASE_URL
/**
 * QuestionAnswer Komponente
 *
 * Diese Komponente ermöglicht es dem Benutzer:
 * 1. Eine Frage einzugeben
 * 2. Die Frage an den Server zu senden
 * 3. Die Antwort und Quellen anzuzeigen
 * 4. Die Antwort in die Zwischenablage zu kopieren
 *
 * Die Komponente verwendet fetch statt axios für HTTP-Anfragen.
 */
const QuestionAnswer = () => {
  // ===== STATE MANAGEMENT =====
  const [question, setQuestion] = useState('') // Frage-Eingabe
  const [isLoading, setIsLoading] = useState(false) // Ladestatus
  const [answer, setAnswer] = useState(null) // Antwort vom Server
  const [error, setError] = useState(null) // Fehlermeldungen
  const [copySuccess, setCopySuccess] = useState(false) // Status für die Kopier-Funktion
  const [currentQuestionId, setCurrentQuestionId] = useState(null) // Aktuelle Frage-ID

  // Referenz für das Textfeld, um darauf programmatisch zuzugreifen
  const questionInputRef = useRef(null)

  // ===== EVENT HANDLER =====

  /**
   * Handler für Änderungen im Textfeld
   */
  const handleInputChange = (e) => {
    setQuestion(e.target.value)
  }

  /**
   * Handler für die Tastatureingabe (Strg+Enter zum Absenden)
   */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit(e)
    }
  }

  /**
   * Handler zum Absenden der Frage
   */
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validierung: Leere Frage abfangen
    if (!question.trim()) {
      setError('Bitte gib eine Frage ein.')
      return
    }

    setIsLoading(true) // Ladeindikator anzeigen
    setAnswer(null) // Alte Antwort zurücksetzen
    setError(null) // Alte Fehler zurücksetzen

    try {
      // API-Anfrage mit fetch
      const response = await fetch(`${API_BASE}/api/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question.trim() }),
      })

      // Fehlerbehandlung für HTTP-Fehler (fetch wirft bei 4xx/5xx keinen Fehler)
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Fehler: ${response.status}`)
      }

      // JSON-Daten parsen
      const data = await response.json()
      setAnswer(data)
      setCurrentQuestionId(data.questionId)

      // Für zukünftige Fragen das Textfeld nicht leeren, sondern nur bei Fokus
      if (questionInputRef.current) {
        questionInputRef.current.dataset.shouldClear = 'true'
      }
    } catch (err) {
      console.error('Fehler bei der Anfrage:', err)
      setError(
        err.message ||
          'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * Handler zum Fokussieren des Textfeldes
   * Leert das Textfeld, wenn es zuvor markiert wurde
   */
  const handleInputFocus = () => {
    const input = questionInputRef.current
    if (input && input.dataset.shouldClear === 'true') {
      setQuestion('')
      input.dataset.shouldClear = 'false'
    }
  }

  /**
   * Kopiert die Frage und Antwort in die Zwischenablage
   */
  const copyToClipboard = () => {
    if (!answer) return

    // Aktuelles Jahr für Copyright dynamisch bestimmen
    const currentYear = new Date().getFullYear()

    const now = new Date()
    const currentYearResearch = now.getFullYear()
    const monthResearch = now.toLocaleString('en-US', { month: 'long' }) // e.g., March
    const dayResearch = now.getDate()
    const apaDate = `${currentYearResearch}, ${monthResearch} ${dayResearch}`

    // Text für die Zwischenablage formatieren
    const copyText = `
Ihre Frage: ${question}

RAGLE: ${answer.answer}

Hinweis: RAGLE ist KEINE medizinische Beratung!
Die bereitgestellten Informationen dienen ausschließlich allgemeinen Bildungs- und Informationszwecken. Sie ersetzen keine ärztliche Untersuchung, Beratung oder Behandlung. Bei gesundheitlichen Beschwerden wenden Sie sich bitte an eine Ärztin oder einen Arzt.
Weitere Informationen unter: https://www.ragle.de

© ${currentYear} Dr. med. Andreas Becker, Facharzt für Neurologie. Inhalte aus KI-gestützter Datenbank (RAG-Verfahren).
Nur zur persönlichen Information. Keine Weitergabe ohne Quellenangabe.

Zitierhinweis/Citation suggestion:
Becker, A. (n.d.).RAGLE – Retrieval-Augmented Generation Language Engine [Online platform]. Retrieved ${apaDate}, from https://www.ragle.de


`.trim()

    // In die Zwischenablage kopieren
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        setCopySuccess(true)

        // Nach 3 Sekunden den Erfolgshinweis wieder entfernen
        setTimeout(() => {
          setCopySuccess(false)
        }, 3000)
      })
      .catch((err) => {
        console.error('Fehler beim Kopieren in die Zwischenablage:', err)
        setError('Kopieren in die Zwischenablage fehlgeschlagen.')
      })
  }

  /**
   * Wandelt einfachen Markdown-Text in HTML um
   */
  const markdownToHtml = (markdown) => {
    if (!markdown) return ''

    return (
      markdown
        // Überschriften (H1-H6)
        .replace(/^#{1,6}\s+(.+)$/gm, (match, content) => {
          const level = match.trim().split(' ')[0].length
          return `<h${level} className="mb-3 font-medium text-gray-800">${content}</h${level}>`
        })
        // Fettdruck
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Kursiv
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Listen
        .replace(/^\s*-\s+(.+)$/gm, '<li>$1</li>')
        // Listen in <ul>-Tags einschließen
        .replace(
          /(<li>.*<\/li>)/gs,
          '<ul className="list-disc ml-5 mb-3">$1</ul>'
        )
        // Zeilenumbrüche
        .replace(/\n/g, '<br />')
    )
  }

  // ===== RENDER-FUNKTIONEN =====

  /**
   * Render-Funktion für den Ladeindikator
   */
  const renderLoading = () => (
    <div className='loading-animation flex flex-col items-center py-5'>
      <div className='loading-dots flex mb-2'>
        <span className='w-3 h-3 mx-1 bg-blue-500 rounded-full animate-pulse'></span>
        <span
          className='w-3 h-3 mx-1 bg-blue-500 rounded-full animate-pulse'
          style={{ animationDelay: '0.2s' }}
        ></span>
        <span
          className='w-3 h-3 mx-1 bg-blue-500 rounded-full animate-pulse'
          style={{ animationDelay: '0.4s' }}
        ></span>
      </div>
      <div className='loading-status text-blue-500 italic'>
        Analysiere Ihre Frage...
      </div>
    </div>
  )

  /**
   * Render-Funktion für die Quellenangaben
   */
  const renderSources = () => {
    if (!answer || !answer.sources || answer.sources.length === 0) {
      return (
        <p className='text-gray-500 italic'>
          Keine spezifischen Quellen gefunden.
        </p>
      )
    }

    return (
      <ul className='sources-list space-y-3'>
        {answer.sources.map((source, index) => (
          <SourceItem key={index} source={source} />
        ))}
      </ul>
    )
  }

  // ===== COMPONENT RENDER =====
  return (
    <div className='question-answer-container max-w-4xl mx-auto'>
      {/* Fragebereich - ohne weißen Hintergrund */}
      <div className='question-form p-5 rounded-lg mb-6'>
        <h2 className='text-xl font-bold mb-3 text-gray-800'>
          Stellen Sie Ihre Frage
        </h2>

        <form onSubmit={handleSubmit}>
          <textarea
            ref={questionInputRef}
            className='w-full p-3 border border-gray-300 rounded min-h-[100px] mb-3 font-sans resize-y bg-white'
            placeholder='Ihre Frage hier eingeben...'
            value={question}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
          />

          <div className='flex items-center gap-2'>
            <button
              type='submit'
              className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200 flex items-center'
              disabled={isLoading}
            >
              <svg
                className='w-5 h-5 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              {isLoading ? 'Wird verarbeitet...' : 'Frage stellen'}
            </button>

            {answer && (
              <button
                type='button'
                onClick={copyToClipboard}
                className={`${
                  copySuccess ? 'bg-green-500' : 'bg-gray-200 hover:bg-gray-300'
                } text-gray-800 font-medium py-2 px-4 rounded transition duration-200 flex items-center`}
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                  />
                </svg>
                {copySuccess ? 'Kopiert!' : 'Antwort kopieren'}
              </button>
            )}
          </div>

          {error && (
            <div className='error-message mt-3 p-3 bg-red-100 text-red-700 rounded'>
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>

      {/* Antwortbereich - ohne weißen Hintergrund */}
      <div className='answer-container p-5 rounded-lg'>
        {isLoading ? (
          renderLoading()
        ) : answer ? (
          <div className='answer-content'>
            <h2 className='text-xl font-bold mb-3 text-gray-800'>Antwort:</h2>

            {/* Antworttext */}
            <div
              className='answer-text mb-6 leading-relaxed text-gray-700 bg-white p-4 rounded-lg text-left'
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(answer.answer),
              }}
            />

            <div className='flex justify-center mt-4'>
              <FeedbackButtons questionId={currentQuestionId} />
            </div>

            {/* Quellenangaben */}
            <div className='sources mb-4'>
              <h3 className='text-lg font-bold mb-3 text-gray-800'>Quellen:</h3>
              {renderSources()}
            </div>
          </div>
        ) : (
          <div className='text-center text-gray-500 py-8'>
            <p>Ihre Antwort wird hier erscheinen.</p>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Komponente für einen einzelnen Quelleneintrag mit Ausklapp-Funktion
 */
const SourceItem = ({ source }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Berechne die Prozentangabe des Scores (0.95 → 95%)
  const scorePercentage = Math.round(source.score * 100)

  // Farbschema basierend auf dem Score
  let scoreColorClass = 'text-red-600' // Default für niedrige Werte
  if (scorePercentage >= 85) {
    scoreColorClass = 'text-green-600' // Sehr gute Übereinstimmung
  } else if (scorePercentage >= 70) {
    scoreColorClass = 'text-yellow-600' // Mittlere Übereinstimmung
  }

  return (
    <li className='source-item border border-gray-200 rounded overflow-hidden bg-white'>
      {/* Header-Bereich mit Titel und Toggle-Button */}
      <div
        className='source-header flex justify-between items-center p-3 bg-gray-50 cursor-pointer'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className='source-info'>
          <span className='source-title font-medium'>
            {source.metadata?.title ||
              source.metadata?.documentTitle ||
              'Quelle'}
          </span>
          <span className='source-relevance ml-2 text-sm text-gray-500'>
            (Relevanz:{' '}
            <span className={scoreColorClass}>{scorePercentage}%</span>)
          </span>
        </div>

        <button
          className='source-toggle text-blue-500 focus:outline-none'
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Details ausblenden' : 'Details anzeigen'}
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      {/* Inhalt, der ein-/ausgeblendet wird */}
      {isExpanded && (
        <div className='source-content p-3 border-t border-gray-200'>
          <div className='source-text bg-gray-50 p-3 rounded text-sm text-gray-700 max-h-[200px] overflow-y-auto text-left'>
            {source.metadata?.text || 'Keine Detailinformationen verfügbar.'}
          </div>

          {/* Weitere Metadaten könnten hier angezeigt werden */}
          {source.metadata?.documentId && (
            <div className='source-meta mt-2 text-xs text-gray-500'>
              Dokument-ID: {source.metadata.documentId}
            </div>
          )}
        </div>
      )}
    </li>
  )
}

export default QuestionAnswer
