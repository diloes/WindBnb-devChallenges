import SearchIcon from './SearchIcon'

import './SearchBox.css'
import EditSearch from './EditSearch'

const SearchBox = () => {
  return (
    <div>
      <div className='font-mulish text-sm flex justify-center mb-8'>
        <button className='buttonLeft p-4'>Whole, Finland</button>
        <button className='buttonMiddle p-4 text-[#BDBDBD]'>Add guests</button>
        <button className='buttonRight p-4 '>
          <SearchIcon />
        </button>
      </div>

      <EditSearch />
    </div>
  )
}

export default SearchBox

