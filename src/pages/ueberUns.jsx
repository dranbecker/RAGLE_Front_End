import React from 'react'
import ContentSection from '../components/contentSection'
import Navigation from '../components/navigation'

function UeberUns() {
  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        {/* Hauptinhalt in einer ContentSection (wiederverwendbare Komponente) */}
        <ContentSection>
          {/* Überschrift mit dekorativem Unterstrich */}
          <div className='text-center mb-10'>
            <h1 className='text-3xl font-bold mb-2 text-gray-800'>
              Über RAGLE-PD
            </h1>
            <div className='w-20 h-1 bg-blue-500 mx-auto'></div>
          </div>

          {/* Einleitender Text */}
          <div className='max-w-3xl mx-auto mb-12 text-lg text-gray-700 leading-relaxed text-left'>
            <p className='mb-4'>
              <strong className='text-blue-600'>
                RAGLE-PD ist mehr als eine Plattform.
              </strong>{' '}
              Es ist ein lebendiger Ort für alle, die verstehen wollen, was
              Parkinson bedeutet – wissenschaftlich, menschlich und praktisch.
            </p>
            <p className='mb-4'>
              Unser Ziel ist es, fundiertes Wissen nicht nur bereitzustellen,
              sondern durch kluge Strukturen und moderne Technologie auch
              zugänglich und erfahrbar zu machen. Dabei steht eines im Fokus:
              Relevanz. Verständlichkeit. Vertrauen.
            </p>
          </div>

          {/* Unsere Mission - mit hervorgehobenem Design */}
          <div className='bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-12'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
              Unsere Mission
            </h2>
            <p className='text-gray-700 mb-4 text-left'>
              Wir haben RAGLE-PD mit einem klaren Ziel geschaffen: Eine
              zentrale, kuratierte Wissensbasis zu etablieren, die durch
              modernste KI-Technologie und Retrieval Augmented Generation (RAG)
              kontinuierlich wächst und validierte Informationen zum Thema
              Parkinson bereitstellt – für alle, die sie benötigen.
            </p>
          </div>

          {/* Warum RAGLE-PD - mit Grid-Layout für die Punkte */}
          <div className='mb-12'>
            <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
              Was RAGLE-PD einzigartig macht
            </h2>

            <div className='grid md:grid-cols-2 gap-6 text-left'>
              {/* Punkt 1 */}
              <div className='bg-white p-5 rounded-lg shadow-sm border border-gray-100'>
                <h3 className='text-xl font-medium mb-2 text-blue-600'>
                  Kollektives Wissen
                </h3>
                <p className='text-gray-600'>
                  Wir vereinen das Wissen aus Fachliteratur, Leitlinien und
                  wissenschaftlichen Publikationen in einem intelligenten
                  System, das kontinuierlich dazulernt und wächst.
                </p>
              </div>

              {/* Punkt 2 */}
              <div className='bg-white p-5 rounded-lg shadow-sm border border-gray-100'>
                <h3 className='text-xl font-medium mb-2 text-blue-600'>
                  Validierte Inhalte
                </h3>
                <p className='text-gray-600'>
                  Alle Informationen basieren auf evidenzbasierten Quellen und
                  werden durch unser Expertennetzwerk kuratiert, um höchste
                  Qualität zu gewährleisten.
                </p>
              </div>

              {/* Punkt 3 */}
              <div className='bg-white p-5 rounded-lg shadow-sm border border-gray-100'>
                <h3 className='text-xl font-medium mb-2 text-blue-600'>
                  Innovative Technologie
                </h3>
                <p className='text-gray-600'>
                  Durch die Kombination von KI und Retrieval Augmented
                  Generation (RAG) schaffen wir einen intelligenten Zugang zu
                  komplexem medizinischem Wissen.
                </p>
              </div>

              {/* Punkt 4 */}
              <div className='bg-white p-5 rounded-lg shadow-sm border border-gray-100'>
                <h3 className='text-xl font-medium mb-2 text-blue-600'>
                  Zielgruppenübergreifend
                </h3>
                <p className='text-gray-600'>
                  Von Betroffenen und Angehörigen über Therapeuten und
                  medizinisches Fachpersonal bis hin zu Wissenschaftlern –
                  RAGLE-PD spricht alle an.
                </p>
              </div>
            </div>
          </div>

          {/* Lernen aus Fragen – Gemeinsam Wissen schaffen */}
          <div className='mb-12'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
              Lernen aus Fragen – Gemeinsam Wissen schaffen
            </h2>
            <p className='text-gray-700 mb-4 text-left'>
              Bei RAGLE-PD glauben wir:{' '}
              <span className='font-semibold text-blue-600'>
                Gute Fragen sind der Anfang von echtem Lernen.
              </span>{' '}
              Denn wenn viele Menschen zu einem Thema nach Antworten suchen,
              entstehen daraus neue Erkenntnisse – für alle.
            </p>
            <p className='text-gray-700 mb-4 text-left'>
              Unterstützt durch künstliche Intelligenz verwandeln wir
              wiederkehrende Fragen in klare, verständliche Lerninhalte. So
              entsteht ein Kreislauf: Aus Neugier wird Wissen, aus Wissen wird
              Kompetenz.
            </p>
            <p className='text-gray-700 text-left'>
              Wer mitmacht, kann nicht nur eigene Antworten finden – sondern
              auch anderen helfen, besser zu verstehen.{' '}
              <span className='italic text-blue-600'>
                Und am Ende steht ein Zertifikat, das zeigt, was man wirklich
                verstanden hat.
              </span>
            </p>
          </div>

          {/* Unsere Vision für die Zukunft */}
          <div className='mb-12'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
              Unsere Vision für die Zukunft
            </h2>
            <p className='text-gray-700 mb-4 text-left'>
              RAGLE-PD soll zum zentralen Knotenpunkt im Wissensökosystem rund
              um Parkinson werden. Wir streben nach einer Plattform, die nicht
              nur Informationen bereitstellt, sondern auch Forschung fördert,
              Zusammenarbeit ermöglicht und letztendlich die Versorgung von
              Menschen mit Parkinson verbessert.
            </p>
            <p className='text-gray-700 text-left'>
              In einer Welt, in der Wissen oft fragmentiert und schwer
              zugänglich ist, schaffen wir eine Brücke zwischen komplexer
              medizinischer Forschung und den Menschen, die von diesem Wissen
              profitieren können.
            </p>
          </div>

          {/* Zitat von Dr. Becker */}
          <div className='bg-gray-50 p-8 rounded-lg mb-12'>
            <blockquote className='text-xl italic text-gray-700 relative'>
              <span className='text-5xl text-blue-200 absolute top-0 left-0'>
                "
              </span>
              <p className='ml-8 relative z-10 text-left'>
                RAGLE-PD ist mehr als ein Zugang zu Wissen – es ist eine
                Plattform, auf der aus Fragen Wissen entsteht und aus Antworten
                Lernen wird. Unser Ziel ist es, durch gemeinschaftlich
                generiertes und validiertes Wissen einen echten Unterschied im
                Leben von Menschen mit Parkinson zu machen.
              </p>
              <footer className='text-right mt-4 text-gray-600'>
                — Dr. Andreas Becker, Chief Visionary RAGLE-PD
              </footer>
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className='text-center'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
              Werden Sie Teil unserer Vision
            </h2>
            <p className='mb-6 max-w-2xl mx-auto'>
              RAGLE-PD wächst mit jedem Beitrag. Ob als Nutzer, Experte oder
              Unterstützer – jeder kann dazu beitragen, diese einzigartige
              Wissensbasis weiterzuentwickeln.
            </p>
            <div>
              <a
                href='#'
                className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mx-2 inline-block transition-colors'
              >
                Jetzt beitragen
              </a>
              <a
                href='#'
                className='bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-full mx-2 inline-block border border-blue-600 transition-colors'
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </ContentSection>
      </div>
    </>
  )
}

export default UeberUns
