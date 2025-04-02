import React, { useState } from 'react'
import Modal from './modal'
import { toast } from 'react-hot-toast'

//Holt jetzt den Host aus der env
const API_BASE = import.meta.env.VITE_API_BASE_URL

const FeedbackButtons = ({ questionId }) => {
  const [selectedRating, setSelectedRating] = useState('')
  const [comment, setComment] = useState('')
  const [feedbackGiven, setFeedbackGiven] = useState(false)

  const handleClick = (rating) => {
    if (!questionId) {
      console.warn('Kein questionId übergeben – Feedback deaktiviert.')
      return
    }

    if (rating === 'partially' || rating === 'no') {
      setSelectedRating(rating)
    } else {
      setSelectedRating(rating)
      sendFeedback(rating, '')
    }
  }

  const sendFeedback = async (rating, commentText) => {
    if (!questionId || !rating) {
      console.warn('Feedback kann nicht gesendet werden – fehlende Daten:', {
        questionId,
        rating,
        comment: commentText,
      })
      return
    }

    try {
      console.log('Sende Feedback:', {
        questionId,
        rating,
        comment: commentText,
      })

      const response = await fetch(`${API_BASE}/api/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionId,
          rating,
          comment: commentText || '',
        }),
      })

      if (response.ok) {
        toast.success('Danke für dein Feedback!', { duration: 4000 })
        setComment('')
        setSelectedRating('')
        setFeedbackGiven(true)
      } else {
        console.error('Feedback senden fehlgeschlagen.')
      }
    } catch (error) {
      console.error('Fehler beim Senden des Feedbacks:', error)
    }
  }

  return (
    <div className='flex flex-col items-center mt-4'>
      {!feedbackGiven && (
        <div className='flex gap-4'>
          <button
            onClick={() => handleClick('yes')}
            type='button'
            className='flex items-center gap-2 py-2 px-4 text-sm font-medium text-white bg-green-600 border border-green-700 rounded-lg hover:bg-green-700 transition-colors duration-200'
          >
            Ja
          </button>

          <button
            onClick={() => handleClick('partially')}
            type='button'
            className='flex items-center gap-2 py-2 px-4 text-sm font-medium text-white bg-yellow-500 border border-yellow-600 rounded-lg hover:bg-yellow-600 transition-colors duration-200'
          >
            Teilweise
          </button>

          <button
            onClick={() => handleClick('no')}
            type='button'
            className='flex items-center gap-2 py-2 px-4 text-sm font-medium text-white bg-red-600 border border-red-700 rounded-lg hover:bg-red-700 transition-colors duration-200'
          >
            Nein
          </button>
        </div>
      )}

      {!feedbackGiven &&
        (selectedRating === 'partially' || selectedRating === 'no') && (
          <Modal
            isOpen={true}
            onClose={() => {
              setSelectedRating('')
              setComment('')
            }}
            title='Feedback geben'
          >
            <div className='mb-4'>
              <label
                htmlFor='comment'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Möchtest du uns einen kurzen Kommentar geben?
              </label>
              <textarea
                id='comment'
                rows={4}
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Dein Kommentar…'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className='flex justify-end gap-2'>
              <button
                onClick={() => {
                  setSelectedRating('')
                  setComment('')
                }}
                className='px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300'
              >
                Abbrechen
              </button>
              <button
                onClick={() => sendFeedback(selectedRating, comment)}
                className='px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700'
              >
                Absenden
              </button>
            </div>
          </Modal>
        )}
    </div>
  )
}

export default FeedbackButtons
