import React, { useRef, useState } from 'react'

const NewPublicationCard = ({
  title,
  containerTitle,
  author,
  url,
  journal,
  matched_keyword,
  onTitleClick,
  audio_url, // NEW
}) => {
  const audioRef = useRef(null)
  const isPlayingRef = useRef(false)
  const [isCurrentPlaying, setIsCurrentPlaying] = useState(false)

  const formatAuthors = (authorArray) => {
    if (!authorArray || authorArray.length === 0) return 'Keine Autoren'
    const first = authorArray[0]
    const last = authorArray[authorArray.length - 1]
    const format = (a) => `${a.family}, ${a.given?.charAt(0) || ''}.`
    return authorArray.length === 1
      ? format(first)
      : `${format(first)} & ${format(last)}`
  }

  const handleAudioClick = () => {
    // Falls bereits ein Audio läuft und dieselbe Datei: stoppen
    if (audioRef.current && !audioRef.current.paused && isPlayingRef.current) {
      audioRef.current.pause()
      isPlayingRef.current = false
      setIsCurrentPlaying(false)
      return
    }

    // Anderes Audio oder nicht abgespielt → stoppen & neues starten
    if (audioRef.current) {
      audioRef.current.pause()
    }

    audioRef.current = new Audio(audio_url)
    isPlayingRef.current = true
    setIsCurrentPlaying(true)

    audioRef.current.play()

    audioRef.current.onended = () => {
      isPlayingRef.current = false
      setIsCurrentPlaying(false)
    }
  }

  console.log('Debug: Props', {
    title,
    containerTitle,
    author,
    url,
    matched_keyword,
  })

  return (
    <div className='w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-left'>
      <div dir='rtl'>
        <span className='ml-0 px-2 py-0.5 text-xs font-semibold text-white bg-gray-500 rounded-s-lg'>
          {matched_keyword}
        </span>
      </div>
      <button
        onClick={onTitleClick}
        className='mb-2 text-base font-normal tracking-tight text-gray-900 dark:text-white hover:underline text-left w-full'
      >
        {title}
      </button>
      <p className='mb-1 text-sm font-mono text-gray-500 dark:text-gray-400'>
        {containerTitle}
      </p>

      <p className='mb-0 text-sm font-normal text-gray-500 dark:text-gray-400'>
        {journal}
      </p>
      <p className='mb-3 text-sm font-normal text-gray-500 dark:text-gray-400'>
        Autor:innen: {formatAuthors(author)}
      </p>

      {audio_url && (
        <button
          onClick={handleAudioClick}
          className={`ml-0 mb-3 flex items-center px-2 py-0.5 ${
            isCurrentPlaying
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 border border-blue-600'
          } hover:bg-green-600 hover:text-green-50 text-sm font-medium rounded-md shadow-sm transition duration-200`}
          title={isCurrentPlaying ? 'Audio stoppen' : 'Audio abspielen'}
        >
          <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
            {isCurrentPlaying ? (
              <path d='M6 6h8v8H6z' />
            ) : (
              <path d='M6 4l10 6-10 6V4z' />
            )}
          </svg>
          {isCurrentPlaying ? 'Stoppen' : 'Abspielen'}
        </button>
      )}

      {url ? (
        <a
          href={url}
          className='inline-flex text-sm font-normal items-center text-blue-600 hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Zur Publikation
          <svg
            className='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 18'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
            />
          </svg>
        </a>
      ) : (
        <div className='inline-flex text-sm font-normal items-center text-blue-600'>
          <svg
            className='w-3 h-3 mr-1'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.75 9.75h.008v.008H9.75V9.75zM14.25 14.25h.008v.008h-.008v-.008zM12 12h.008v.008H12V12zM21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          Keine Online-Ressource
        </div>
      )}
    </div>
  )
}

export default NewPublicationCard
