import React, { useEffect, useState } from 'react'
import NewPublicationCard from './newPublicationCard'

//Holt jetzt den Host aus der env
const API_BASE = import.meta.env.VITE_API_BASE_URL

const NewPublicationCardList = () => {
  const [publications, setPublications] = useState([])
  const [selectedPublication, setSelectedPublication] = useState(null)

  const handleTitleClick = (publication) => {
    setSelectedPublication(publication)
  }

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/citeref/cards`)
        const data = await response.json()
        setPublications(data)
      } catch (error) {
        console.error('Fehler beim Abrufen der Publikationen:', error)
      }
    }

    fetchPublications()
  }, [])

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 px-4'>
        {publications.map((pub, index) => (
          <NewPublicationCard
            key={index}
            title={pub.title}
            containerTitle={pub.containerTitle}
            author={pub.authors}
            url={pub.url}
            journal={pub.journal}
            urlAvailable={!!pub.url}
            matched_keyword={pub.matched_keyword}
            summary_en={pub.summary_en}
            summary_de={pub.summary_de}
            onTitleClick={() => handleTitleClick(pub)}
          />
        ))}
      </div>
      {selectedPublication && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative'>
            <button
              className='absolute top-2 right-2 text-gray-600 hover:text-black'
              onClick={() => setSelectedPublication(null)}
            >
              &#10005;
            </button>
            <h2 className='text-xl font-semibold mb-4'>
              {selectedPublication.title}
            </h2>
            <p className='text-sm text-gray-700 mb-2'>
              <strong>Zusammenfassung (DE):</strong>{' '}
              {selectedPublication.summary_de ||
                'Keine deutsche Zusammenfassung vorhanden.'}
            </p>
            <p className='text-sm text-gray-700'>
              <strong>Summary (EN):</strong>{' '}
              {selectedPublication.summary_en ||
                'No English summary available.'}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default NewPublicationCardList
