import { Stay } from '../stay.interface'
import stays from '../stays.json'

// Creamos nuevo array sin ciudades repetidas
const uniqueCities = [...new Set(stays.map((stay) => stay.city))]

const EditSearch = ({ handleMenuClose }: { handleMenuClose: () => void }) => {
  return (
    <section className=' h-[80vh] font-mulish fixed z-50 inset-0 bg-white p-4'>
      <div className='flex justify-between items-center mb-3'>
        <p className='font-bold text-xs'>Edit your search</p>
        <p onClick={handleMenuClose}>X</p>
      </div>

      <div className='border rounded-lg '>
        <div className='border-b p-2'>
          <p className='text-[9px] font-extrabold'>LOCATION</p>
          <p className=' text-sm'>Helsinki, Finland</p>
        </div>
        <div className='p-2'>
          <p className='text-[9px] font-extrabold'>GUESTS</p>
          <p className='text-[#BDBDBD] text-sm'>Add guests</p>
        </div>
      </div>

      {uniqueCities.map((city: string) => {
        return (
          <div className='flex mt-5 px-3'>
            <img src='/ubicacion.png' />
            <p>{city}, Finland</p>
          </div>
        )
      })}
    </section>
  )
}

export default EditSearch
