// src/pages/nutzungsbedingungen.jsx
import React from 'react'
import ContentSection from '../components/contentSection'

function Nutzungsbedingungen() {
  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <ContentSection>
          <div className='max-w-none text-left'>
            <h1 className='text-3xl font-bold mb-8 text-gray-800 border-b pb-4'>
              Nutzungsbedingungen für RAGLE-PD
            </h1>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                1. Allgemeines und Geltungsbereich
              </h2>
              <p className='mb-3 text-gray-600'>
                1.1 Diese Nutzungsbedingungen gelten für die Nutzung der
                RAGLE-PD Plattform (im Folgenden "Plattform" genannt), die von
                Dr. Andreas Becker (im Folgenden "Betreiber" genannt) betrieben
                wird.
              </p>
              <p className='mb-3 text-gray-600'>
                1.2 Die Plattform bietet eine KI-gestützte Wissensverarbeitung
                im Bereich Parkinson-Erkrankungen, die evidenzbasierte
                Fachinformationen, Leitlinien und wissenschaftliche
                Publikationen verarbeitet und zugänglich macht.
              </p>
              <p className='mb-3 text-gray-600'>
                1.3 Mit der Nutzung der Plattform akzeptieren Sie diese
                Nutzungsbedingungen. Wenn Sie mit diesen Bedingungen nicht
                einverstanden sind, nutzen Sie bitte die Plattform nicht.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                2. Medizinischer Hinweis
              </h2>
              <p className='mb-3 text-gray-600'>
                2.1 Die auf der Plattform bereitgestellten Informationen dienen
                ausschließlich zu allgemeinen Bildungs- und Informationszwecken.
              </p>
              <p className='mb-3 text-gray-600'>
                2.2 Die Plattform stellt{' '}
                <span className='font-semibold'>
                  keine medizinische Beratung
                </span>{' '}
                dar und ersetzt nicht die Konsultation mit qualifizierten
                Gesundheitsdienstleistern. Die angebotenen Informationen
                ersetzen in keinem Fall eine ärztliche Untersuchung, Beratung
                oder Behandlung.
              </p>
              <p className='mb-3 text-gray-600'>
                2.3 Bei gesundheitlichen Beschwerden oder Fragen zu Ihrer
                medizinischen Versorgung wenden Sie sich bitte an einen
                qualifizierten Arzt oder eine medizinische Fachkraft.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                3. Nutzungsrechte
              </h2>
              <p className='mb-3 text-gray-600'>
                3.1 Der Betreiber gewährt dem Nutzer ein nicht-exklusives,
                nicht-übertragbares und nicht-unterlizenzierbares Recht zur
                Nutzung der Plattform für persönliche und interne Zwecke.
              </p>
              <p className='mb-3 text-gray-600'>
                3.2 Die Nutzung der Plattform für kommerzielle Zwecke, zur
                Weiterverbreitung oder zur systematischen Extraktion von
                Inhalten ist ohne ausdrückliche schriftliche Zustimmung des
                Betreibers untersagt.
              </p>
              <p className='mb-3 text-gray-600'>
                3.3 Der Nutzer darf die Plattform nicht für illegale Zwecke oder
                zur Verbreitung rechtswidriger Inhalte nutzen.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                4. KI-gestützte Inhalte
              </h2>
              <p className='mb-3 text-gray-600'>
                4.1 Die Plattform verwendet KI-Technologien, um Informationen zu
                verarbeiten und bereitzustellen. Die generierten Inhalte werden
                auf Basis kuratierter und validierter Quellen erstellt, können
                jedoch unvollständig oder in Einzelfällen fehlerhaft sein.
              </p>
              <p className='mb-3 text-gray-600'>
                4.2 Der Betreiber übernimmt keine Gewähr für die
                Vollständigkeit, Richtigkeit und Aktualität der durch die KI
                generierten Informationen.
              </p>
              <p className='mb-3 text-gray-600'>
                4.3 Die Verwendung der bereitgestellten Informationen erfolgt
                auf eigene Verantwortung des Nutzers.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                5. Haftungsbeschränkung
              </h2>
              <p className='mb-3 text-gray-600'>
                5.1 Der Betreiber haftet nicht für direkte oder indirekte
                Schäden, die durch die Nutzung der Plattform oder durch die
                Verwendung der bereitgestellten Informationen entstehen können.
              </p>
              <p className='mb-3 text-gray-600'>
                5.2 Dies umfasst insbesondere Schäden, die durch Entscheidungen
                entstehen, welche auf Basis der auf der Plattform
                bereitgestellten Informationen getroffen wurden.
              </p>
              <p className='mb-3 text-gray-600'>
                5.3 Der Haftungsausschluss gilt nicht für Schäden, die auf
                Vorsatz oder grober Fahrlässigkeit beruhen, sowie bei Verletzung
                von Leben, Körper und Gesundheit.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                6. Urheberrecht und geistiges Eigentum
              </h2>
              <p className='mb-3 text-gray-600'>
                6.1 Alle Inhalte, Texte, Grafiken, Logos, Bilder und Software
                auf der Plattform unterliegen dem Urheberrecht und sind Eigentum
                des Betreibers oder seiner Lizenzgeber.
              </p>
              <p className='mb-3 text-gray-600'>
                6.2 Jede Nutzung, Vervielfältigung, Verbreitung oder öffentliche
                Wiedergabe, die über die persönliche, nicht-kommerzielle Nutzung
                hinausgeht, bedarf der vorherigen schriftlichen Zustimmung des
                Betreibers.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                7. Datenschutz
              </h2>
              <p className='mb-3 text-gray-600'>
                7.1 Die Erhebung und Verarbeitung personenbezogener Daten
                erfolgt gemäß unserer Datenschutzerklärung, die integraler
                Bestandteil dieser Nutzungsbedingungen ist.
              </p>
              <p className='mb-3 text-gray-600'>
                7.2 Die gestellten Fragen und Interaktionen mit der Plattform
                können zur Verbesserung des Systems gespeichert und analysiert
                werden.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                8. Änderungen der Nutzungsbedingungen
              </h2>
              <p className='mb-3 text-gray-600'>
                8.1 Der Betreiber behält sich das Recht vor, diese
                Nutzungsbedingungen jederzeit zu ändern. Die geänderten
                Bedingungen werden auf der Plattform veröffentlicht und treten
                mit ihrer Veröffentlichung in Kraft.
              </p>
              <p className='mb-3 text-gray-600'>
                8.2 Die fortgesetzte Nutzung der Plattform nach Veröffentlichung
                geänderter Nutzungsbedingungen gilt als Zustimmung zu diesen
                Änderungen.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                9. Anwendbares Recht
              </h2>
              <p className='mb-3 text-gray-600'>
                9.1 Diese Nutzungsbedingungen unterliegen deutschem Recht unter
                Ausschluss des UN-Kaufrechts und der Kollisionsnormen.
              </p>
              <p className='mb-3 text-gray-600'>
                9.2 Für Streitigkeiten aus oder im Zusammenhang mit der Nutzung
                der Plattform sind die Gerichte am Sitz des Betreibers
                zuständig, sofern der Nutzer Kaufmann ist oder keinen
                allgemeinen Gerichtsstand in Deutschland hat.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                10. Salvatorische Klausel
              </h2>
              <p className='mb-3 text-gray-600'>
                10.1 Sollten einzelne Bestimmungen dieser Nutzungsbedingungen
                unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
                Bestimmungen hiervon unberührt.
              </p>
              <p className='mb-3 text-gray-600'>
                10.2 An die Stelle der unwirksamen Bestimmung tritt eine
                wirksame Bestimmung, die dem wirtschaftlichen Zweck der
                unwirksamen Bestimmung möglichst nahekommt.
              </p>
            </section>

            <div className='mt-12 border-t pt-4 text-gray-500 text-sm'>
              Stand: März 2025
            </div>
          </div>
        </ContentSection>
      </div>
    </>
  )
}

export default Nutzungsbedingungen
