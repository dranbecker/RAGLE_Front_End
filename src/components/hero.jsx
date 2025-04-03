import React from 'react'
// Importiere das Bild - Stelle sicher, dass es im richtigen Verzeichnis liegt
import bgImage from '../assets/andreas_discord.webp' // Pfad anpassen nach Bedarf

const HeroSection = () => {
  return (
    // Full-width container mit relativer Positionierung für absolute Elemente
    <div className='relative w-full min-h-[460px] bg-slate-800 overflow-hidden '>
      {/* Hintergrundbild mit dem Arzt - nimmt 70% der Breite ein */}
      <div
        className='absolute top-0 left-0 w-[70%] h-full max-h-[700px] bg-cover bg-top z-10'
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Linke Seite mit Zitat - überlappt das Hintergrundbild */}
      <div className='relative w-[70%] pt-[240px] pr-[40px] pb-[40px] pl-[40px] text-[#f8971d] z-20 flex flex-col justify-center text-left'>
        <blockquote className='text-2xl mb-5 max-w-[400px]'>
          "RAGLE-PD ist mehr als ein Zugang zu Wissen – es ist eine Plattform,
          auf der aus Fragen Wissen entsteht und aus Antworten Lernen wird..."
        </blockquote>

        <p className='text-white mb-2 max-w-[300]'>
          Dr. Andreas Becker, <br /> Neurologist & Chief Visionary, RAGLE-PD
        </p>
      </div>

      {/* Rechte Seite mit Call-to-Action - blaue Box */}
      <div className='absolute top-0 right-0 w-[30%] bg-[#3498db] p-5 text-white z-20 h-full flex flex-col justify-center text-left'>
        <h2 className='text-2xl mb-4 leading-tight'>
          Fortschritt braucht neue Wege..
          <br />
          Wir brauchen dich!
        </h2>
        <p className='mb-8 text-base'>
          Mit RAGLE-PD wird spezialisiertes Wissen zu Parkinson intelligenter,
          zugänglicher und relevanter. Unterstütze die Entwicklung einer
          Plattform, die nicht nur Antworten liefert, sondern den medizinischen
          Dialog neu denkt.
        </p>
        <div>
          <span className='inline-block w-[60px] h-[2px] bg-white mr-4 align-middle'></span>
          <a
            href='#spenden'
            className='inline-block bg-white text-[#3498db] px-8 py-3 rounded-full font-semibold text-center transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md'
          >
            Jetzt mitmachen
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
