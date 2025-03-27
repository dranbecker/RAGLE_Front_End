export default function HeroSection() {
  return (
    <section className='relative w-full h-[500px]'>
      {/* Linke Hintergrundbild-Fläche */}
      <div className='absolute top-0 left-0 w-[70%] h-full bg-red-500 z-10'>
        TESTBILD
      </div>

      <div className='relative z-20 grid grid-cols-1 md:grid-cols-2 h-full'>
        {/* Linke Seite: Text über dem Bild */}
        <div className='flex items-center justify-center p-6'>
          <div className='bg-white/80 backdrop-blur-sm p-6 rounded shadow text-gray-800 max-w-md'>
            <blockquote className='text-xl md:text-2xl italic font-light mb-4'>
              "RAGLE-PD ist mehr als ein Zugang zu Wissen – es ist eine
              Plattform, auf der aus Fragen Wissen entsteht und aus Antworten
              Lernen wird..."
            </blockquote>
            <p className='text-sm font-medium'>
              — Dr. Andreas Becker, Neurologist & Chief Visionary, RAGLE-PD
            </p>
          </div>
        </div>

        {/* Rechte Seite: Call-to-Action auf blauer Fläche */}
        <div className='flex items-center justify-center bg-blue-600 text-white p-6'>
          <div className='text-center max-w-md'>
            <h2 className='text-2xl font-bold mb-2'>
              Fortschritt braucht neue Wege..
              <br />
              Wir brauchen dich.
            </h2>
            <p className='text-sm mb-4'>
              Mit RAGLE wird spezialisiertes Wissen zu Parkinson intelligenter,
              zugänglicher und relevanter. Unterstütze die Entwicklung einer
              Plattform, die nicht nur Antworten liefert, sondern den
              medizinischen Dialog neu denkt.
            </p>
            <a
              href='#spenden'
              className='inline-block bg-white text-blue-600 px-5 py-2 rounded font-semibold hover:bg-gray-100'
            >
              Jetzt unterstützen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
