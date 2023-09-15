import stays from '../stays.json'
import { useAppContext } from '../context/context'
import { useState } from 'react'

// Crear un nuevo array sin ciudades repetidas
const uniqueCities = [...new Set(stays.map((stay) => stay.city))]

const EditSearch = ({ handleMenuClose }: { handleMenuClose: () => void }) => {
  const { findByCityAndGuests, setLocation, location, guests, setGuests } =
    useAppContext()

  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)

  const handleLocationChange = (city: string) => {
    setLocation(city)
  }

  const incrementAdults = () => {
    setAdults(adults + 1)
    setGuests(guests + 1)
  }

  const decrementAdults = () => {
    setAdults(adults - 1)
    setGuests(guests - 1)
  }

  const incrementChildren = () => {
    setChildren(children + 1)
    setGuests(guests + 1)
  }

  const decrementChildren = () => {
    setChildren(children - 1)
    setGuests(guests - 1)
  }

  return (
    <section className='flex flex-col h-[80vh] font-mulish fixed z-50 inset-0 bg-white p-4'>
      {/* Header Search */}
      <div className='flex justify-between items-center mb-3'>
        <p className='font-bold text-xs'>Edit your search</p>
        <p onClick={handleMenuClose} className='cursor-pointer'>
          X
        </p>
      </div>

      {/* Info */}
      <div className='border rounded-lg'>
        <div className='border-b p-2'>
          <p className='text-[9px] font-extrabold'>LOCATION</p>
          <p className=' text-sm'>{location + ', Finland'}</p>
        </div>
        <div className='p-2'>
          <p className='text-[9px] font-extrabold'>GUESTS</p>
          {guests === 0 ? (
            <p className='text-[#BDBDBD] text-sm'>Add guests</p>
          ) : (
            <p className='text-sm'>{guests} guests</p>
          )}
        </div>
      </div>

      {/* Cities */}
      <div className='flex-grow'>
        {uniqueCities.map((city: string) => (
          <div
            className='flex mt-5 px-3'
            key={city}
            onClick={() => handleLocationChange(city)}
          >
            <img src='/ubicacion.png' alt={`Location icon for ${city}`} />
            <p className='cursor-pointer'>{city}, Finland</p>
          </div>
        ))}
      </div>

      {/* Guests */}
      <div className='flex-grow text-sm '>
        {/* Adults */}
        <div className='mb-4'>
          <p className='font-bold text-[#333]'>Adults</p>
          <p className='text-[#BDBDBD] mb-1'>Ages 13 or above</p>
          <div className='flex gap-2 items-center'>
            <button
              className='border border-black rounded-md px-2'
              onClick={decrementAdults}
            >
              -
            </button>
            <p>{adults}</p>
            <button
              className='border border-black rounded-md px-2'
              onClick={incrementAdults}
            >
              +
            </button>
          </div>
        </div>

        {/* Children */}
        <div>
          <p className='font-bold text-[#333]'>Children</p>
          <p className='text-[#BDBDBD] mb-1'>Ages 2-12</p>
          <div className='flex gap-2 items-center'>
            <button
              className='border border-black rounded-md px-2'
              onClick={decrementChildren}
            >
              -
            </button>
            <p>{children}</p>
            <button
              className='border border-black rounded-md px-2'
              onClick={incrementChildren}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        className='m-auto px-6 py-4 rounded-3xl bg-red-500 bg-opacity-90 text-white'
        onClick={() => {
          handleMenuClose(), findByCityAndGuests(location, guests)
          /* guests > 0 && findByGuests(guests),
            location !== 'Whole' && findByCity(location) */
        }}
      >
        <div className='flex gap-3'>
          <img src='/searchIcon.png' width={24} />
          <p className='cursor-pointer'>Search</p>
        </div>
      </button>
    </section>
  )
}

export default EditSearch
