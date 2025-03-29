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
          <h1 className='text-2xl font-bold mb-6'>Datenschutzerklärung</h1>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            1. Verantwortliche Stelle und Kontakt
          </h2>
          <p className='mb-3 text-gray-600'>
            Der Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO)
            und anderer nationaler Datenschutzgesetze sowie sonstiger
            datenschutzrechtlicher Bestimmungen ist:
          </p>
          <p className='mb-3 text-gray-600'>
            Dr. Andreas Becker
            <br />
            SRH Kurpfalzkrankenhaus Heidelberg
            <br />
            Bonhoefferstr. 5<br />
            69123 Heidelberg
            <br />
            Deutschland
          </p>
          <p className='mb-3 text-gray-600'>
            E-Mail: info.kkh@srh.de
            <br />
            Telefon: +49 6221 88 4010
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            2. Allgemeine Informationen zur Datenverarbeitung
          </h2>
          <p className='mb-3 text-gray-600'>
            Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich
            nur, soweit dies zur Bereitstellung einer funktionsfähigen Website
            sowie unserer Inhalte und Leistungen erforderlich ist. Die
            Verarbeitung personenbezogener Daten unserer Nutzer erfolgt
            regelmäßig nur nach Einwilligung des Nutzers oder in Fällen, in
            denen eine vorherige Einholung einer Einwilligung aus tatsächlichen
            Gründen nicht möglich ist und die Verarbeitung der Daten durch
            gesetzliche Vorschriften gestattet ist.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            3. Rechtsgrundlagen der Datenverarbeitung
          </h2>
          <p className='mb-3 text-gray-600'>
            Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
            Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1
            lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
          </p>
          <p className='mb-3 text-gray-600'>
            Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung
            eines Vertrages erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO
            als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die
            zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
          </p>
          <p className='mb-3 text-gray-600'>
            Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer
            rechtlichen Verpflichtung erforderlich ist, dient Art. 6 Abs. 1 lit.
            c DSGVO als Rechtsgrundlage.
          </p>
          <p className='mb-3 text-gray-600'>
            Für den Fall, dass lebenswichtige Interessen der betroffenen Person
            oder einer anderen natürlichen Person eine Verarbeitung
            personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1
            lit. d DSGVO als Rechtsgrundlage.
          </p>
          <p className='mb-3 text-gray-600'>
            Ist die Verarbeitung zur Wahrung eines berechtigten Interesses
            unseres Unternehmens oder eines Dritten erforderlich und überwiegen
            die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das
            erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO
            als Rechtsgrundlage für die Verarbeitung.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            4. Datenlöschung und Speicherdauer
          </h2>
          <p className='mb-3 text-gray-600'>
            Die personenbezogenen Daten der betroffenen Person werden gelöscht
            oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine
            Speicherung kann darüber hinaus erfolgen, wenn dies durch
            europäische oder nationale Gesetze oder Verordnungen, denen der
            Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder
            Löschung der Daten erfolgt auch dann, wenn eine durch die genannten
            Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine
            Erforderlichkeit zur weiteren Speicherung der Daten für einen
            Vertragsabschluss oder eine Vertragserfüllung besteht.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            5. Erhebung und Speicherung personenbezogener Daten sowie Art und
            Zweck von deren Verwendung
          </h2>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            a) Beim Besuch der Website
          </h3>
          <p className='mb-3 text-gray-600'>
            Bei der bloß informatorischen Nutzung der Website, also wenn Sie
            sich nicht registrieren oder uns anderweitig Informationen
            übermitteln, erheben wir nur solche Daten, die Ihr Browser an
            unseren Server übermittelt (sog. "Server-Logfiles"). Diese umfassen:
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
            Die vorübergehende Speicherung der IP-Adresse durch das System ist
            notwendig, um eine Auslieferung der Website an den Rechner des
            Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für
            die Dauer der Sitzung gespeichert bleiben.
          </p>
          <p className='mb-3 text-gray-600'>
            Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der
            Website sicherzustellen sowie zur Optimierung der Website und zur
            Sicherstellung der Sicherheit unserer informationstechnischen
            Systeme. Eine Auswertung der Daten zu Marketingzwecken findet in
            diesem Zusammenhang nicht statt.
          </p>
          <p className='mb-3 text-gray-600'>
            Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes
            ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung
            der Daten zur Bereitstellung der Website ist dies der Fall, wenn die
            jeweilige Sitzung beendet ist. Im Falle der Speicherung der Daten in
            Logfiles ist dies nach spätestens sieben Tagen der Fall.
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            b) Bei Registrierung für die Nutzung unserer Dienste
          </h3>
          <p className='mb-3 text-gray-600'>
            Wenn Sie sich für unsere Dienste registrieren, erheben wir folgende
            Daten:
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
            Datenbankdienst, gespeichert und verarbeitet. Die Daten werden zur
            Verwaltung Ihres Benutzerkontos und zur Ermöglichung der Nutzung
            unserer Dienste verwendet.
          </p>
          <p className='mb-3 text-gray-600'>
            Die Registrierung ist für die Nutzung bestimmter Funktionen unseres
            Angebots erforderlich. Die Daten werden gelöscht, sobald sie für die
            Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.
            Dies ist für die während des Registrierungsvorgangs erhobenen Daten
            der Fall, wenn die Registrierung auf unserer Internetseite
            aufgehoben oder abgeändert wird.
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            c) Bei der Nutzung unseres Frage-Antwort-Systems
          </h3>
          <p className='mb-3 text-gray-600'>
            Wenn Sie unser Frage-Antwort-System nutzen, speichern wir:
          </p>
          <ul className='list-disc pl-8 mb-4'>
            <li>Die gestellte Frage</li>
            <li>Die generierte Antwort</li>
            <li>Zeitpunkt der Anfrage</li>
            <li>Geräteinformationen (Browser, Betriebssystem)</li>
            <li>IP-Adresse</li>
            <li>Feedback zur Antwort (falls gegeben)</li>
          </ul>
          <p className='mb-3 text-gray-600'>
            Diese Daten werden in unserer Supabase-Datenbank gespeichert und
            dienen der Verbesserung unseres Dienstes, der Qualitätssicherung und
            der Analyse von Nutzungsmustern.
          </p>
          <p className='mb-4 font-bold'>
            Wichtig: Bitte geben Sie in Ihren Fragen KEINE personenbezogenen
            Daten von sich oder Dritten ein (wie Namen, Adressen,
            Gesundheitsinformationen konkreter Personen). Wenn Sie
            personenbezogene Daten in Ihre Fragen eingeben, werden diese an
            OpenAI zur Verarbeitung weitergegeben und in unserer Datenbank
            gespeichert.
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            d) Bei Zahlungsvorgängen
          </h3>
          <p className='mb-3 text-gray-600'>
            Für die Abwicklung von Zahlungen nutzen wir PayPal als externen
            Zahlungsdienstleister. Bei der Bezahlung werden Sie auf die Seite
            des Zahlungsdienstleisters weitergeleitet und geben dort Ihre
            Zahlungsdaten ein. Wir selbst speichern keine Zahlungsdaten,
            erhalten jedoch Informationen über den Abschluss der Zahlung.
          </p>
          <p className='mb-3 text-gray-600'>
            PayPal kann weitere Daten zu Analysezwecken erheben. Nähere
            Informationen dazu finden Sie in der Datenschutzerklärung von
            PayPal:{' '}
            <a
              href='https://www.paypal.com/de/webapps/mpp/ua/privacy-full'
              className='text-blue-600 hover:underline'
            >
              https://www.paypal.com/de/webapps/mpp/ua/privacy-full
            </a>
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            6. Weitergabe von Daten
          </h2>
          <p className='mb-3 text-gray-600'>
            Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als
            den im Folgenden aufgeführten Zwecken findet nicht statt:
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>a) OpenAI</h3>
          <p className='mb-3 text-gray-600'>
            Bei der Nutzung unseres Frage-Antwort-Systems werden Ihre Fragen an
            OpenAI übermittelt, um relevante Antworten zu generieren. Nach
            unseren Informationen werden Kundendaten in der kostenpflichtigen
            OpenAI-API nicht zum Training der Sprachmodelle verwendet, jedoch
            werden sie für 30 Tage zur Missbrauchserkennung gespeichert.
          </p>
          <p className='mb-3 text-gray-600'>
            Bitte beachten Sie, dass OpenAI ein US-amerikanisches Unternehmen
            ist und Daten in den USA verarbeitet werden. Das Datenschutzniveau
            in den USA entspricht möglicherweise nicht dem in der EU, obwohl
            OpenAI sich bemüht, den DSGVO-Standards zu entsprechen.
          </p>
          <p className='mb-3 text-gray-600'>
            Weitere Informationen finden Sie in der Datenschutzrichtlinie von
            OpenAI:{' '}
            <a
              href='https://openai.com/policies/privacy-policy'
              className='text-blue-600 hover:underline'
            >
              https://openai.com/policies/privacy-policy
            </a>
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>b) Pinecone</h3>
          <p className='mb-3 text-gray-600'>
            Für die Vektordatenbank-Funktionen nutzen wir Pinecone. Pinecone
            erhält die Embeddings (numerische Repräsentationen) Ihrer Fragen,
            aber nicht die Fragen selbst in Klartext. Auch Pinecone ist ein
            US-amerikanisches Unternehmen.
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>c) Supabase</h3>
          <p className='mb-3 text-gray-600'>
            Supabase dient als unsere primäre Datenbank und
            Authentifizierungslösung. Hier werden Ihre Anmeldedaten, Fragen,
            Antworten und Systeminteraktionen gespeichert. Supabase bietet
            Server in verschiedenen Regionen an, einschließlich der EU, und
            bemüht sich um DSGVO-Konformität.
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            d) AWS/Cloud-Hosting
          </h3>
          <p className='mb-3 text-gray-600'>
            Unsere Anwendung wird auf Servern von Amazon Web Services (AWS) oder
            ähnlichen Cloud-Hosting-Anbietern gehostet. Diese erhalten zur
            Bereitstellung des Dienstes Zugriff auf IP-Adressen und Server-Logs.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            7. Verarbeitung von hochgeladenen Dokumenten
          </h2>
          <p className='mb-3 text-gray-600'>
            Bei der Nutzung unseres Dokument-Upload-Systems werden die von Ihnen
            hochgeladenen Dokumente auf unseren Servern gespeichert und
            verarbeitet. Dies umfasst:
          </p>
          <ul className='list-disc pl-8 mb-4'>
            <li>Die Extraktion von Text aus den Dokumenten</li>
            <li>Die Aufteilung in kleinere Textblöcke ("Chunking")</li>
            <li>Die Vektorisierung der Textblöcke für die Suche</li>
          </ul>
          <p className='mb-3 text-gray-600'>
            Bitte beachten Sie, dass für Veranstaltungen hochgeladene Prospekte
            und andere Dokumente öffentlich zugänglich sein können und in
            Antworten auf Nutzerfragen zitiert werden können. Diese Dokumente
            können Namen von Referenten, Veranstaltern, Veranstaltungsorten oder
            andere personenbezogene Daten enthalten, die dann über unsere
            Suchfunktion auffindbar werden.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            8. Cookies und lokale Speicherung
          </h2>
          <p className='mb-3 text-gray-600'>
            Unsere Website verwendet Cookies und lokale Speicherung (Local
            Storage) für die Authentifizierung und Sitzungsverwaltung. Dabei
            handelt es sich um kleine Textdateien bzw. Daten, die auf Ihrem
            Endgerät gespeichert werden und die eine Analyse der Benutzung der
            Website durch Sie ermöglichen.
          </p>
          <p className='mb-3 text-gray-600'>
            Bei der Nutzung von Cookies oder Local Storage werden Daten wie
            Nutzer-IDs und Authentifizierungstokens auf Ihrem Gerät gespeichert.
            Diese dienen dazu, Sie während der Nutzung unserer Dienste
            angemeldet zu halten.
          </p>
          <p className='mb-3 text-gray-600'>
            Sie können die Verwendung von Cookies durch entsprechende
            Einstellungen Ihres Browsers verhindern oder einschränken. Bereits
            gespeicherte Cookies können jederzeit gelöscht werden. Wenn Sie
            Cookies deaktivieren, kann dies die Funktionalität unserer Website
            einschränken.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            9. Rechte der betroffenen Person
          </h2>
          <p className='mb-3 text-gray-600'>
            Wenn Ihre personenbezogenen Daten verarbeitet werden, sind Sie
            Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte
            gegenüber dem Verantwortlichen zu:
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>a) Auskunftsrecht</h3>
          <p className='mb-3 text-gray-600'>
            Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen,
            ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet
            werden. Liegt eine solche Verarbeitung vor, können Sie Auskunft über
            folgende Informationen verlangen:
          </p>
          <ul className='list-disc pl-8 mb-4'>
            <li>
              Die Zwecke, zu denen die personenbezogenen Daten verarbeitet
              werden
            </li>
            <li>
              Die Kategorien von personenbezogenen Daten, welche verarbeitet
              werden
            </li>
            <li>
              Die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen
              die Sie betreffenden personenbezogenen Daten offengelegt wurden
              oder noch offengelegt werden
            </li>
            <li>
              Die geplante Dauer der Speicherung der Sie betreffenden
              personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht
              möglich sind, Kriterien für die Festlegung der Speicherdauer
            </li>
            <li>
              Das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie
              betreffenden personenbezogenen Daten, eines Rechts auf
              Einschränkung der Verarbeitung durch den Verantwortlichen oder
              eines Widerspruchsrechts gegen diese Verarbeitung
            </li>
            <li>
              Das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde
            </li>
            <li>
              Alle verfügbaren Informationen über die Herkunft der Daten, wenn
              die personenbezogenen Daten nicht bei der betroffenen Person
              erhoben werden
            </li>
          </ul>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            b) Recht auf Berichtigung
          </h3>
          <p className='mb-3 text-gray-600'>
            Sie haben das Recht, von uns unverzüglich die Berichtigung Sie
            betreffender unrichtiger personenbezogener Daten zu verlangen.
            Ferner steht Ihnen das Recht zu, unter Berücksichtigung der Zwecke
            der Verarbeitung, die Vervollständigung unvollständiger
            personenbezogener Daten – auch mittels einer ergänzenden Erklärung –
            zu verlangen.
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            c) Recht auf Löschung
          </h3>
          <p className='mb-3 text-gray-600'>
            Sie haben das Recht, von uns zu verlangen, dass die Sie betreffenden
            personenbezogenen Daten unverzüglich gelöscht werden, und wir sind
            verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der
            folgenden Gründe zutrifft:
          </p>
          <ul className='list-disc pl-8 mb-4'>
            <li>
              Die Sie betreffenden personenbezogenen Daten sind für die Zwecke,
              für die sie erhoben oder auf sonstige Weise verarbeitet wurden,
              nicht mehr notwendig
            </li>
            <li>
              Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung
              stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für
              die Verarbeitung
            </li>
            <li>
              Sie legen Widerspruch gegen die Verarbeitung ein und es liegen
              keine vorrangigen berechtigten Gründe für die Verarbeitung vor
            </li>
            <li>
              Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig
              verarbeitet
            </li>
            <li>
              Die Löschung der Sie betreffenden personenbezogenen Daten ist zur
              Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht
              oder dem Recht der Mitgliedstaaten erforderlich, dem wir
              unterliegen
            </li>
            <li>
              Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf
              angebotene Dienste der Informationsgesellschaft erhoben
            </li>
          </ul>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            d) Recht auf Einschränkung der Verarbeitung
          </h3>
          <p className='mb-3 text-gray-600'>
            Unter den folgenden Voraussetzungen können Sie die Einschränkung der
            Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen:
          </p>
          <ul className='list-disc pl-8 mb-4'>
            <li>
              Wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen
              Daten für eine Dauer bestreiten, die es uns ermöglicht, die
              Richtigkeit der personenbezogenen Daten zu überprüfen
            </li>
            <li>
              Wenn die Verarbeitung unrechtmäßig ist und Sie die Löschung der
              personenbezogenen Daten ablehnen und stattdessen die Einschränkung
              der Nutzung der personenbezogenen Daten verlangen
            </li>
            <li>
              Wenn wir die personenbezogenen Daten für die Zwecke der
              Verarbeitung nicht länger benötigen, Sie diese jedoch zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              benötigen
            </li>
            <li>
              Wenn Sie Widerspruch gegen die Verarbeitung eingelegt haben und
              noch nicht feststeht, ob die berechtigten Gründe des
              Verantwortlichen gegenüber Ihren Gründen überwiegen
            </li>
          </ul>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            e) Recht auf Datenübertragbarkeit
          </h3>
          <p className='mb-3 text-gray-600'>
            Sie haben das Recht, die Sie betreffenden personenbezogenen Daten,
            die Sie uns bereitgestellt haben, in einem strukturierten, gängigen
            und maschinenlesbaren Format zu erhalten, und Sie haben das Recht,
            diese Daten einem anderen Verantwortlichen ohne Behinderung durch
            uns zu übermitteln, sofern:
          </p>
          <ul className='list-disc pl-8 mb-4'>
            <li>
              Die Verarbeitung auf einer Einwilligung oder auf einem Vertrag
              beruht und
            </li>
            <li>Die Verarbeitung mithilfe automatisierter Verfahren erfolgt</li>
          </ul>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            f) Widerspruchsrecht
          </h3>
          <p className='mb-3 text-gray-600'>
            Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, jederzeit gegen die Verarbeitung der Sie
            betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1
            lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            g) Recht auf Widerruf der datenschutzrechtlichen
            Einwilligungserklärung
          </h3>
          <p className='mb-3 text-gray-600'>
            Sie haben das Recht, Ihre datenschutzrechtliche
            Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf
            der Einwilligung wird die Rechtmäßigkeit der aufgrund der
            Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
          </p>

          <h3 className='text-lg font-semibold mt-4 mb-2'>
            h) Recht auf Beschwerde bei einer Aufsichtsbehörde
          </h3>
          <p className='mb-3 text-gray-600'>
            Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
            gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei
            einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
            Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
            Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der
            Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            10. Datensicherheit
          </h2>
          <p className='mb-3 text-gray-600'>
            Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung
            des Stands der Technik, der Implementierungskosten und der Art, des
            Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der
            unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des
            Risikos für die Rechte und Freiheiten natürlicher Personen,
            geeignete technische und organisatorische Maßnahmen, um ein dem
            Risiko angemessenes Schutzniveau zu gewährleisten.
          </p>
          <p className='mb-3 text-gray-600'>
            Zu den Maßnahmen gehören insbesondere:
          </p>
          <ul className='list-disc pl-8 mb-4'>
            <li>Die Verschlüsselung der Kommunikation mittels HTTPS</li>
            <li>
              Die Pseudonymisierung und Verschlüsselung personenbezogener Daten
            </li>
            <li>
              Die Fähigkeit, die Vertraulichkeit, Integrität, Verfügbarkeit und
              Belastbarkeit der Systeme und Dienste im Zusammenhang mit der
              Verarbeitung dauerhaft sicherzustellen
            </li>
            <li>
              Die Fähigkeit, die Verfügbarkeit der personenbezogenen Daten und
              den Zugang zu ihnen bei einem physischen oder technischen
              Zwischenfall rasch wiederherzustellen
            </li>
            <li>
              Ein Verfahren zur regelmäßigen Überprüfung, Bewertung und
              Evaluierung der Wirksamkeit der technischen und organisatorischen
              Maßnahmen zur Gewährleistung der Sicherheit der Verarbeitung
            </li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            11. Änderungen der Datenschutzerklärung
          </h2>
          <p className='mb-3 text-gray-600'>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
            Änderungen unserer Leistungen in der Datenschutzerklärung
            umzusetzen. Für Ihren erneuten Besuch gilt dann die neue
            Datenschutzerklärung.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-gray-700'>
            12. Fragen an den Datenschutzbeauftragten
          </h2>
          <p className='mb-3 text-gray-600'>
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
            E-Mail oder wenden Sie sich direkt an die für den Datenschutz
            verantwortliche Person:
          </p>
          <p className='mb-3 text-gray-600'>
            [Kontaktdaten des Datenschutzbeauftragten einfügen]
          </p>

          <hr className='my-8' />
          <p className='mb-4 text-gray-600'>
            Stand: [aktuelles Datum einfügen]
          </p>
        </ContentSection>
      </div>
    </>
  )
}

export default Datenschutz
