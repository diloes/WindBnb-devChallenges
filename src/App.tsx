import Logo from './components/Logo'
import SearchBox from './components/SearchBox'
import StayPreview from './components/StayPreview'
import { useAppContext } from './context/context'

const App = () => {
  const { newStays } = useAppContext()

  return (
    <div className='p-4 md:p-8 max-w-7xl mx-auto'>
      <header className='md:flex md:justify-between md:items-center'>
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
          <p className='text-sm'>{newStays.length > 12 ? '12+' : newStays.length } stays</p>
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

// TODO: Trabajar los Guests
