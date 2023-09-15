import SearchIcon from './SearchIcon'

import './searchBox.css'
import EditSearch from './EditSearch'
import { useState } from 'react'
import { useAppContext } from '../context/context'

const SearchBox = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { location } = useAppContext()

  const handleMenuOpen = () => {
    setMenuOpen(true)
  }

  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  return (
    <div>
      <div className='font-mulish text-sm flex justify-center mb-8'>
        <button onClick={handleMenuOpen} className='buttonLeft p-4'>
          {location + ', Finland'}
        </button>
        <button onClick={handleMenuOpen} className='buttonMiddle p-4 text-[#BDBDBD]'>
          Add guests
        </button>
        <button onClick={handleMenuOpen} className='buttonRight p-4 '>
          <SearchIcon />
        </button>
      </div>

      {menuOpen && <EditSearch handleMenuClose={handleMenuClose} />}
    </div>
  )
}

export default SearchBox
