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
      <main></main>
      <footer></footer>
    </div>
  )
}

export default App
