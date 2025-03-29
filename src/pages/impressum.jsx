// src/pages/impressum.jsx
import React from 'react'
import ContentSection from '../components/contentSection'

function Impressum() {
  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <ContentSection>
          <h1 className='text-2xl font-bold mb-6'>Impressum</h1>

          <h2 className='text-xl font-semibold mt-6 mb-3'>
            Angaben gemäß § 5 TMG
          </h2>
          <p className='mb-4'>
            Dr. Andreas Becker
            <br />
            Reichenbachstr. 27-31
            <br />
            68309 Mannheim
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>Kontakt</h3>
          <p className='mb-4'>
            Telefon: +49 6221 88 4010
            <br />
            E-Mail: kontakt@srh.de
          </p>

          {/* Weitere Impressum-Inhalte aus Ihrer Modal-Vorlage */}
        </ContentSection>
      </div>
    </>
  )
}

export default Impressum
