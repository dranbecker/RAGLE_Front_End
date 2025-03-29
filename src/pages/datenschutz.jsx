// src/pages/datenschutz.jsx
import React from 'react'
import ContentSection from '../components/contentSection'
import Navigation from '../components/navigation'

function Datenschutz() {
  return (
    <>
      <Navigation />
      <div className='container mx-auto px-4 py-8'>
        <ContentSection>
          <div className='max-w-none text-left'>
            <h1 className='text-3xl font-bold mb-8 text-gray-800 border-b pb-4'>
              Datenschutzerklärung
            </h1>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                1. Verantwortliche Stelle und Kontakt
              </h2>
              <p className='mb-3 text-gray-600'>
                Der Verantwortliche im Sinne der Datenschutz-Grundverordnung
                (DSGVO) und anderer nationaler Datenschutzgesetze sowie
                sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
              <p className='mb-3 text-gray-600'>
                Dr. Andreas Becker
                <br />
                Reichenbachstr 27-31. 5<br />
                68309 Mannheim
                <br />
                Deutschland
              </p>
              <p className='mb-3 text-gray-600'>
                E-Mail: datenschutz@ragle.de
                <br />
                Telefon: +49 6621 77 66 55 44
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                2. Allgemeine Informationen zur Datenverarbeitung
              </h2>
              <p className='mb-3 text-gray-600'>
                Wir verarbeiten personenbezogene Daten unserer Nutzer
                grundsätzlich nur, soweit dies zur Bereitstellung einer
                funktionsfähigen Website sowie unserer Inhalte und Leistungen
                erforderlich ist. Die Verarbeitung personenbezogener Daten
                unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des
                Nutzers oder in Fällen, in denen eine vorherige Einholung einer
                Einwilligung aus tatsächlichen Gründen nicht möglich ist und die
                Verarbeitung der Daten durch gesetzliche Vorschriften gestattet
                ist.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                3. Rechtsgrundlagen der Datenverarbeitung
              </h2>
              <p className='mb-3 text-gray-600'>
                Soweit wir für Verarbeitungsvorgänge personenbezogener Daten
                eine Einwilligung der betroffenen Person einholen, dient Art. 6
                Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als
                Rechtsgrundlage.
              </p>
              <p className='mb-3 text-gray-600'>
                Bei der Verarbeitung von personenbezogenen Daten, die zur
                Erfüllung eines Vertrages erforderlich ist, dient Art. 6 Abs. 1
                lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für
                Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher
                Maßnahmen erforderlich sind.
              </p>
              <p className='mb-3 text-gray-600'>
                Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung
                einer rechtlichen Verpflichtung erforderlich ist, dient Art. 6
                Abs. 1 lit. c DSGVO als Rechtsgrundlage.
              </p>
              <p className='mb-3 text-gray-600'>
                Für den Fall, dass lebenswichtige Interessen der betroffenen
                Person oder einer anderen natürlichen Person eine Verarbeitung
                personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1
                lit. d DSGVO als Rechtsgrundlage.
              </p>
              <p className='mb-3 text-gray-600'>
                Ist die Verarbeitung zur Wahrung eines berechtigten Interesses
                unseres Unternehmens oder eines Dritten erforderlich und
                überwiegen die Interessen, Grundrechte und Grundfreiheiten des
                Betroffenen das erstgenannte Interesse nicht, so dient Art. 6
                Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                4. Datenlöschung und Speicherdauer
              </h2>
              <p className='mb-3 text-gray-600'>
                Die personenbezogenen Daten der betroffenen Person werden
                gelöscht oder gesperrt, sobald der Zweck der Speicherung
                entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn
                dies durch europäische oder nationale Gesetze oder Verordnungen,
                denen der Verantwortliche unterliegt, vorgesehen wurde. Eine
                Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine
                durch die genannten Normen vorgeschriebene Speicherfrist
                abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren
                Speicherung der Daten für einen Vertragsabschluss oder eine
                Vertragserfüllung besteht.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
                5. Erhebung und Speicherung personenbezogener Daten sowie Art
                und Zweck von deren Verwendung
              </h2>

              <h3 className='text-lg font-semibold mt-4 mb-2'>
                a) Beim Besuch der Website
              </h3>
              <p className='mb-3 text-gray-600'>
                Bei der bloß informatorischen Nutzung der Website, also wenn Sie
                sich nicht registrieren oder uns anderweitig Informationen
                übermitteln, erheben wir nur solche Daten, die Ihr Browser an
                unseren Server übermittelt (sog. "Server-Logfiles"). Diese
                umfassen:
              </p>
              <ul className='list-disc pl-8 mb-4'>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>Jeweils übertragene Datenmenge</li>
                <li>Website, von der die Anforderung kommt</li>
                <li>Browser</li>
                <li>Betriebssystem und dessen Oberfläche</li>
                <li>Sprache und Version der Browsersoftware</li>
              </ul>
              <p className='mb-3 text-gray-600'>
                Die vorübergehende Speicherung der IP-Adresse durch das System
                ist notwendig, um eine Auslieferung der Website an den Rechner
                des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des
                Nutzers für die Dauer der Sitzung gespeichert bleiben.
              </p>
              <p className='mb-3 text-gray-600'>
                Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit
                der Website sicherzustellen sowie zur Optimierung der Website
                und zur Sicherstellung der Sicherheit unserer
                informationstechnischen Systeme. Eine Auswertung der Daten zu
                Marketingzwecken findet in diesem Zusammenhang nicht statt.
              </p>
              <p className='mb-3 text-gray-600'>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle
                der Erfassung der Daten zur Bereitstellung der Website ist dies
                der Fall, wenn die jeweilige Sitzung beendet ist. Im Falle der
                Speicherung der Daten in Logfiles ist dies nach spätestens
                sieben Tagen der Fall.
              </p>

              <h3 className='text-lg font-semibold mt-4 mb-2'>
                b) Bei Registrierung für die Nutzung unserer Dienste
              </h3>
              <p className='mb-3 text-gray-600'>
                Wenn Sie sich für unsere Dienste registrieren, erheben wir
                folgende Daten:
              </p>
              <ul className='list-disc pl-8 mb-4'>
                <li>E-Mail-Adresse</li>
                <li>Passwort (in verschlüsselter Form)</li>
                <li>Benutzername/Anzeigename (sofern angegeben)</li>
                <li>IP-Adresse</li>
                <li>Zeitpunkt der Registrierung</li>
              </ul>
              <p className='mb-3 text-gray-600'>
                Diese Daten werden bei Supabase, unserem Authentifizierungs- und
                Datenbankdienst, gespeichert und verarbeitet. Die Daten werden
                zur Verwaltung Ihres Benutzerkontos und zur Ermöglichung der
                Nutzung unserer Dienste verwendet.
              </p>
              <p className='mb-3 text-gray-600'>
                Die Registrierung ist für die Nutzung bestimmter Funktionen
                unseres Angebots erforderlich. Die Daten werden gelöscht, sobald
                sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
                erforderlich sind. Dies ist für die während des
                Registrierungsvorgangs erhobenen Daten der Fall, wenn die
                Registrierung auf unserer Internetseite aufgehoben oder
                abgeändert wird.
              </p>
            </section>

            {/* Weitere Sektionen folgen dem gleichen Muster */}

            <div className='mt-12 border-t pt-4 text-gray-500 text-sm'>
              Stand: März 2025
            </div>
          </div>
        </ContentSection>
      </div>
    </>
  )
}

export default Datenschutz
