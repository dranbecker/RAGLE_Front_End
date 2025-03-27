export default function Header() {
  return (
    <header className='bg-white shadow-md py-4 px-6'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <img
            src='/images/head_logo_raglePD.png'
            alt='RAGLE Logo'
            className='h-10 w-auto'
          />
          <h1 className='text-2xl font-bold text-gray-800'>
            RAGLE – Research and Guidance Language Engine
          </h1>
        </div>
        <nav>{/* Navigation oder Buttons können hier eingebaut werden */}</nav>
      </div>
    </header>
  )
}
