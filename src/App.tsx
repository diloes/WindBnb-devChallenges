import Logo from './components/Logo'
import SearchBox from './components/SearchBox'

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
      <main className='flex justify-between p-1 font-montserrat'>
        <h1 className='font-bold text-lg'>Stays in Finland</h1>
        <p className='text-sm'>12+ stays</p>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
