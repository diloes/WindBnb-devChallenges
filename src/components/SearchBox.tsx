import SearchIcon from './SearchIcon'

import './SearchBox.css'

const SearchBox = () => {
  return (
    <div className='font-mulish text-sm flex justify-center'>
      <button className='buttonLeft p-4'>Whole, Finland</button>
      <button className='buttonMiddle p-4 text-[#BDBDBD]'>Add guests</button>
      <button className='buttonRight p-4 '>
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchBox
