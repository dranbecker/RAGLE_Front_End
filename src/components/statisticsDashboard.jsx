// src/components/StatistikDashboard.jsx
import React, { useState, useEffect } from 'react'

// StatistikDashboard-Komponente mit Hooks für State-Management
const StatistikDashboard = () => {
  // State für die Statistikdaten
  const [statsData, setStatsData] = useState({
    totalQuestions: 0,
    totalFeedback: 0,
    positiveCount: 0,
    positiveRate: 0,
    documentCount: 0,
    trendingTopics: [],
  })

  // State für den Ladezustand
  const [loading, setLoading] = useState(true)

  // State für das Modal (falls du das implementieren möchtest)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState('')

  // Daten beim ersten Rendern laden (ComponentDidMount-Ersatz)
  useEffect(() => {
    // Funktion zum Laden der Statistikdaten
    const fetchStatistikData = async () => {
      try {
        setLoading(true)

        // API-Aufruf zum Backend - verwende den tatsächlichen Endpunkt
        const response = await fetch('/api/statistics')

        // Prüfen, ob die Anfrage erfolgreich war
        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`)
        }

        const data = await response.json()
        console.log('Geladene Statistikdaten:', data) // Debug-Log

        // Optional: Dokumente-Anzahl separat laden
        let documentCount = 0
        try {
          const docResponse = await fetch('/api/documents/count')
          const docData = await docResponse.json()
          documentCount = docData.count || 0
        } catch (docError) {
          console.warn('Fehler beim Laden der Dokumentenanzahl:', docError)
        }

        // Daten in den State setzen - angepasst an das tatsächliche Format
        setStatsData({
          totalQuestions: data.totalQuestions || 0,
          totalFeedback: data.totalFeedback || 0,
          positiveCount: data.positiveCount || 0,
          positiveRate: data.positiveRate || 0,
          documentCount: documentCount,
          trendingTopics: data.trendingTopics || [],
        })
      } catch (error) {
        console.error('Fehler beim Laden der Statistiken:', error)
        // Fallback-Daten für Entwicklungszwecke
        setStatsData({
          totalQuestions: 311,
          totalFeedback: 139,
          positiveCount: 128,
          positiveRate: '92.1',
          documentCount: 36,
          trendingTopics: [
            { topic: 'Harnwegsinfekt', category: 'Krankheit', count: 3 },
            { topic: 'Weaningversagen', category: 'Symptom', count: 2 },
            { topic: 'Tracheotomie', category: 'Verfahren', count: 3 },
            { topic: 'Dopaminagonisten', category: 'Medikament', count: 8 },
            { topic: 'Rasagilin', category: 'Medikament', count: 9 },
          ],
        })
      } finally {
        setLoading(false)
      }
    }

    fetchStatistikData()
  }, []) // Leeres Array = nur beim ersten Rendern ausführen

  // Farbzuordnung für verschiedene Themenkategorien
  const categoryColors = {
    krankheit: '#e74c3c',
    symptom: '#9b59b6',
    verfahren: '#3498db',
    medikament: '#f39c12',
    abteilung: '#2ecc71',
    behandlung: '#1abc9c',
    default: '#7f8c8d',
  }

  // Icons für verschiedene Kategorien
  const categoryIcons = {
    krankheit: '🏥',
    symptom: '🤒',
    verfahren: '⚕️',
    medikament: '💊',
    abteilung: '🩺',
    behandlung: '💉',
    default: '📋',
  }

  // Funktion zum Anzeigen der Themenzusammenfassung
  const showTopicSummary = (topic) => {
    setSelectedTopic(topic)
    setModalOpen(true)

    // Für jetzt nur ein Alert, später könnte hier ein Modal geöffnet werden
    alert(`Zusammenfassung für Thema: ${topic} würde hier angezeigt werden`)
  }

  // Helper-Funktion zum Anzeigen der Topic-Tags
  const renderTopicTag = (topic) => {
    // Kategorie zu Kleinbuchstaben konvertieren für die Mappings
    const category = (topic.category || 'default').toLowerCase()
    const color = categoryColors[category] || categoryColors.default
    const icon = categoryIcons[category] || categoryIcons.default

    return (
      <div
        key={topic.topic}
        className='topic-tag flex items-center p-2 rounded-lg cursor-pointer transition-all'
        style={{
          backgroundColor: `${color}20`, // 20% Opacity
          color: color,
          borderLeft: `3px solid ${color}`,
        }}
        onClick={() => showTopicSummary(topic.topic)}
        title={`Klicken für eine Zusammenfassung zum Thema "${topic.topic}"`}
      >
        <span className='text-xl mr-2'>{icon}</span>
        <span className='font-medium mr-2'>{topic.topic}</span>
        <span
          className='text-xs font-bold rounded-full px-2 py-1 min-w-[1.5rem] text-center text-white'
          style={{ backgroundColor: color }}
        >
          {topic.count}
        </span>
      </div>
    )
  }

  // Während des Ladens einen Ladezustand anzeigen
  if (loading) {
    return (
      <div className='bg-white p-4 rounded-lg shadow-sm animate-pulse'>
        <div className='h-8 bg-gray-200 rounded w-1/4 mb-4'></div>
        <div className='flex flex-wrap gap-4'>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className='flex-1 min-w-[150px] h-24 bg-gray-200 rounded'
            ></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='bg-gray-100 p-5 rounded-lg shadow-sm mb-6'>
      {/* Statistik-Container */}
      <div className='flex flex-wrap gap-4 mb-4'>
        {/* Karten für die Statistikdaten */}
        <StatCard
          value={statsData.totalQuestions}
          label='Gesamte Fragen'
          color='#3498db'
        />

        <StatCard
          value={statsData.positiveCount}
          label='Positive Bewertungen'
          color='#2ecc71'
        />

        <StatCard
          value={`${statsData.positiveRate}%`}
          label='Zufriedenheitsrate'
          color='#f39c12'
        />

        <StatCard
          value={statsData.totalFeedback}
          label='Abgegebenes Feedback'
          color='#9b59b6'
        />

        <StatCard
          value={statsData.documentCount}
          label='Verfügbare Dokumente'
          color='#e74c3c'
        />
      </div>

      {/* Trendthemen-Bereich */}
      <div className='mt-6'>
        <h3 className='text-gray-700 font-medium mb-2'>
          Trendthemen (30 Tage)
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
          {statsData.trendingTopics.map((topic) => renderTopicTag(topic))}
        </div>
      </div>
    </div>
  )
}

// Hilfkomponente für die einzelnen Statistik-Karten
const StatCard = ({ value, label, color }) => {
  return (
    <div
      className='flex-1 min-w-[150px] bg-white p-4 rounded-lg shadow-sm border-t-4 transition-transform hover:translate-y-[-2px]'
      style={{ borderColor: color }}
    >
      {/* Größere, extrafette Schrift für den Wert */}
      <div className='text-base font-medium mb-1'>{value}</div>
      {/* Etwas größere, blaue Schrift für die Beschriftung */}
      <div className='text-sm text-gray-500 font-sans'>{label}</div>
    </div>
  )
}

export default StatistikDashboard
