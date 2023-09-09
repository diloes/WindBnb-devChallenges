import SearchIcon from './SearchIcon'

import './SearchBox.css'
import EditSearch from './EditSearch'
import { useState } from 'react'

const SearchBox = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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
          Whole, Finland
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
