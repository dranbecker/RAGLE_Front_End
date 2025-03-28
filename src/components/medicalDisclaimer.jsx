// src/components/MedicalDisclaimer.jsx
import React from 'react'

/**
 * Eine statische Komponente, die einen wichtigen medizinischen Haftungsausschluss anzeigt
 * Dieser Disclaimer ist für alle Seiten gedacht, die medizinische Informationen bereitstellen
 */
const MedicalDisclaimer = () => {
  return (
    <div className='border-l-4 border-red-600 pl-4 my-6 bg-gray-50'>
      {/* Überschrift mit Info-Icon */}
      <h3 className='flex items-center text-lg font-medium text-gray-800 mb-2'>
        <span className='mr-2' aria-hidden='true'>
          ℹ️
        </span>
        Wichtiger Hinweis zur KI-gestützten Informationsbereitstellung
      </h3>

      {/* Erster Absatz - Einleitung */}
      <p className='text-gray-700 mb-3 text-left'>
        Die Plattform <strong>RAGLE-PD</strong> stellt u.a. medizinische
        Informationen mithilfe einer KI-gestützten Technologie bereit. Die
        zugrundeliegenden Daten basieren auf validierten medizinischen Quellen,
        werden jedoch <strong>automatisch verarbeitet und generiert</strong>.
      </p>

      {/* Gelber Warnhinweis-Kasten */}
      <div className='bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-3'>
        {/* "Keine medizinische Beratung" Warnung */}
        <p className='font-medium mb-2'>
          <span className='text-yellow-700 mr-2'>⚠</span>
          <span className='text-orange-600 font-bold'>
            RAGLE ist KEINE medizinische Beratung
          </span>
        </p>

        <p className='text-gray-700'>
          Die bereitgestellten Informationen dienen ausschließlich allgemeinen
          Bildungs- und Informationszwecken. Sie{' '}
          <span className='text-orange-600 font-medium'>
            ersetzen keine ärztliche Untersuchung, Beratung oder Behandlung
          </span>
          . Bei gesundheitlichen Beschwerden wenden Sie sich bitte{' '}
          <span className='text-orange-600 font-medium'>
            an eine Ärztin oder einen Arzt
          </span>
          .
        </p>
      </div>

      {/* Haftungsausschluss */}
      <p className='text-gray-700 text-left'>
        Die Plattform <strong>RAGLE-PD</strong> übernimmt{' '}
        <strong>keine Haftung</strong> für Entscheidungen, die auf Basis der
        hier bereitgestellten Informationen getroffen werden.
      </p>
    </div>
  )
}

export default MedicalDisclaimer
