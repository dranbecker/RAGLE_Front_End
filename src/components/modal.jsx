import React from 'react'

export default function Modal({ title, children, onClose }) {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
      onClick={onClose}
    >
      <div
        className='bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center mb-4'>
          <h2>{title}</h2>
          <button
            className='bg-transparent border-none text-2xl leading-none cursor-pointer'
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className='text-base'>{children}</div>
      </div>
    </div>
  )
}
