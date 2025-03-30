import React, { useEffect, useState } from 'react'
import NewPublicationCard from './newPublicationCard'

//Holt jetzt den Host aus der env
const API_BASE = import.meta.env.VITE_API_BASE_URL

const NewPublicationCardList = () => {
  const [publications, setPublications] = useState([])

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch('${API_BASE}/api/citeref/cards')
        const data = await response.json()
        setPublications(data)
      } catch (error) {
        console.error('Fehler beim Abrufen der Publikationen:', error)
      }
    }

    fetchPublications()
  }, [])

  return (
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
        />
      ))}
    </div>
  )
}

export default NewPublicationCardList
