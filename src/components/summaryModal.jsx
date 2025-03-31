import React from 'react'

const SummaryModal = ({ isOpen, onClose, summaryDe, summaryEn }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full'>
        <h2 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>
          Zusammenfassung der Publikation
        </h2>
        <div className='mb-6'>
          <h3 className='font-medium text-gray-700 dark:text-gray-300 mb-1'>
            🇩🇪 Deutsch
          </h3>
          <p className='text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line'>
            {summaryDe}
          </p>
        </div>
        <div className='mb-4'>
          <h3 className='font-medium text-gray-700 dark:text-gray-300 mb-1'>
            🇬🇧 Englisch
          </h3>
          <p className='text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line'>
            {summaryEn}
          </p>
        </div>
        <button
          onClick={onClose}
          className='mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
        >
          Schließen
        </button>
      </div>
    </div>
  )
}

export default SummaryModal
