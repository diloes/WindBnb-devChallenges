import Logo from './components/Logo'
import SearchBox from './components/SearchBox'
import stays from './stays.json'

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

        <div className='grid'>
          {stays.map((stay) => (
            <div key={stay.title} className='mb-8'>
              <img src={stay.photo} alt={stay.title} className='rounded-3xl mb-3' />
              <div className='flex justify-between mb-2 items-center'>
                {stay.superHost ? (
                  <p className='text-[10px] font-extrabold border-2 border-gray-700 rounded-xl p-1'>
                    SUPERHOST
                  </p>
                ) : (
                  ''
                )}
                <p className='text-xs text-[#828282]'>
                  {stay.type} . {stay.beds} beds
                </p>
                <div className='flex gap-1 items-center'>
                  <img src='/icons8-star-48.png' height={21} width={21} />
                  <p className='text-[#4F4F4F] text-xs'>{stay.rating}</p>
                </div>
              </div>
              <h2 className='font-semibold text-sm'>{stay.title}</h2>
            </div>
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
