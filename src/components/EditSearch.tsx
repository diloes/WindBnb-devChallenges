import { useState } from 'react'
import stays from '../stays.json'

// Crear un nuevo array sin ciudades repetidas
const uniqueCities = [...new Set(stays.map((stay) => stay.city))]

const EditSearch = ({ handleMenuClose }: { handleMenuClose: () => void }) => {
  const [location, setLocation] = useState<string>('Helsinki, Finland')

  const handleLocationChange = (city: string) => {
    setLocation(city)
  }

  return (
    <section className='flex flex-col h-[80vh] font-mulish fixed z-50 inset-0 bg-white p-4'>
      <div className='flex justify-between items-center mb-3'>
        <p className='font-bold text-xs'>Edit your search</p>
        <p onClick={handleMenuClose} className='cursor-pointer'>
          X
        </p>
      </div>

      <div className='border rounded-lg'>
        <div className='border-b p-2'>
          <p className='text-[9px] font-extrabold'>LOCATION</p>
          <p className=' text-sm'>{location + ', Finland'}</p>
        </div>
        <div className='p-2'>
          <p className='text-[9px] font-extrabold'>GUESTS</p>
          <p className='text-[#BDBDBD] text-sm'>Add guests</p>
        </div>
      </div>

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

      <button
        className='m-auto px-6 py-4 rounded-3xl bg-red-500 bg-opacity-90 text-white'
        onClick={handleMenuClose}
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
