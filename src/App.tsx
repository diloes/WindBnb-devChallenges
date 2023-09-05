import Logo from './components/Logo'
import SearchBox from './components/SearchBox'
import StayPreview from './components/StayPreview'

const App = () => {
  return (
    <div className='p-4'>
      <header className=''>
        <div className='mb-6'>
          <Logo />
        </div>
        <div>
          <SearchBox />
        </div>
      </header>
      <main className='grid p-1 font-montserrat'>
        <div className='flex justify-between mb-5'>
          <h1 className='font-bold text-lg'>Stays in Finland</h1>
          <p className='text-sm'>12+ stays</p>
        </div>

        <StayPreview />
      </main>
      <footer>
        <p className='flex justify-center text-[#828282]'>
          created by <span className='font-bold'>{'\b diloes'}</span> - devChallenges.io
        </p>
      </footer>
    </div>
  )
}

export default App
