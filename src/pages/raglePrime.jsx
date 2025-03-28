// src/pages/RaglePrime.jsx
import React, { useState } from 'react'
import ContentSection from '../components/contentSection'

// Beispiel-Komponente für den Chat-Bereich (später durch echten Chat ersetzen)
function PrimeChat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Willkommen bei RAGLE Prime!', sender: 'system' },
    {
      id: 2,
      text: 'Hier können Sie in einem erweiterten Dialog mit unserer KI kommunizieren.',
      sender: 'system',
    },
  ])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Nachricht hinzufügen
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input, sender: 'user' },
    ])
    setInput('')

    // Simulierte Antwort
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: 'Das ist eine Beispielantwort. In der fertigen Anwendung würde hier die echte KI-Antwort erscheinen.',
          sender: 'ai',
        },
      ])
    }, 1000)
  }

  return (
    <div className='h-[60vh] flex flex-col'>
      <div className='flex-1 overflow-y-auto mb-4 p-4 border rounded-lg bg-gray-50'>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-4 p-3 rounded-lg max-w-[80%] ${
              msg.sender === 'user'
                ? 'ml-auto bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className='flex'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='flex-1 p-2 border rounded-l-lg focus:outline-none focus:border-blue-500'
          placeholder='Schreiben Sie Ihre Frage...'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600'
        >
          Senden
        </button>
      </form>
    </div>
  )
}

// Beispiel für einen Admin-Bereich (später durch echten Admin-Bereich ersetzen)
function AdminSection() {
  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Admin-Bereich</h2>
      <p className='mb-4'>
        Hier können Sie als Administrator Dokumente verwalten und
        Systemeinstellungen vornehmen.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='p-4 border rounded-lg bg-white'>
          <h3 className='font-bold mb-2'>Dokumente</h3>
          <p>Verwaltung der Wissensdokumente</p>
          <button className='mt-2 bg-blue-500 text-white px-3 py-1 rounded'>
            Öffnen
          </button>
        </div>
        <div className='p-4 border rounded-lg bg-white'>
          <h3 className='font-bold mb-2'>Nutzer</h3>
          <p>Verwaltung der Benutzerkonten</p>
          <button className='mt-2 bg-blue-500 text-white px-3 py-1 rounded'>
            Öffnen
          </button>
        </div>
      </div>
    </div>
  )
}

function RaglePrime() {
  // Simulieren des eingeloggten Benutzers (später durch echte Authentifizierung ersetzen)
  const [userRole, setUserRole] = useState('admin') // 'admin' oder 'prime'
  const [activeTab, setActiveTab] = useState('chat')

  const isAdmin = userRole === 'admin'

  return (
    <div className='container mx-auto px-4 py-8'>
      <ContentSection>
        <h1 className='text-2xl font-bold mb-6'>RAGLE Prime</h1>

        {/* Tabs für Admin-Nutzer */}
        {isAdmin && (
          <div className='flex mb-6 border-b'>
            <button
              className={`py-2 px-4 mr-2 ${
                activeTab === 'chat'
                  ? 'border-b-2 border-blue-500 text-blue-500 font-medium'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('chat')}
            >
              Prime Chat
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === 'admin'
                  ? 'border-b-2 border-blue-500 text-blue-500 font-medium'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('admin')}
            >
              Admin-Bereich
            </button>
          </div>
        )}

        {/* Inhaltsbereich basierend auf Tab oder Rolle */}
        {isAdmin ? (
          activeTab === 'chat' ? (
            <PrimeChat />
          ) : (
            <AdminSection />
          )
        ) : (
          <PrimeChat />
        )}

        {/* Temporärer Schalter zum Testen verschiedener Rollen */}
        <div className='mt-8 pt-4 border-t'>
          <p className='mb-2 text-sm text-gray-500'>
            Rollenumschaltung für Entwicklungszwecke:
          </p>
          <div className='flex'>
            <button
              className={`mr-4 px-3 py-1 rounded ${
                userRole === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setUserRole('admin')}
            >
              Als Admin
            </button>
            <button
              className={`px-3 py-1 rounded ${
                userRole === 'prime' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setUserRole('prime')}
            >
              Als Prime-Mitglied
            </button>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}

export default RaglePrime
