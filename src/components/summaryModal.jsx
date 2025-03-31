import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
          <ReactMarkdown
            className='prose dark:prose-invert max-w-none'
            remarkPlugins={[remarkGfm]}
            components={{
              h2: (props) => (
                <h2 className='text-lg font-semibold mt-4' {...props} />
              ),
              h3: (props) => (
                <h3 className='text-base font-semibold mt-3' {...props} />
              ),
              p: (props) => (
                <p
                  className='mb-2 text-gray-600 dark:text-gray-400 text-sm'
                  {...props}
                />
              ),
            }}
          >
            {summaryDe}
          </ReactMarkdown>
        </div>
        <div className='mb-4'>
          <h3 className='font-medium text-gray-700 dark:text-gray-300 mb-1'>
            🇬🇧 Englisch
          </h3>
          <ReactMarkdown
            className='prose dark:prose-invert max-w-none'
            remarkPlugins={[remarkGfm]}
            components={{
              h2: (props) => (
                <h2 className='text-lg font-semibold mt-4' {...props} />
              ),
              h3: (props) => (
                <h3 className='text-base font-semibold mt-3' {...props} />
              ),
              p: (props) => (
                <p
                  className='mb-2 text-gray-600 dark:text-gray-400 text-sm'
                  {...props}
                />
              ),
            }}
          >
            {summaryEn}
          </ReactMarkdown>
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
