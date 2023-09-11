import stays from '../stays.json'

const StayPreview = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {stays.map((stay) => (
        <div key={stay.title} className='mb-8'>
          <img
            src={stay.photo}
            alt={stay.title}
            className='rounded-3xl mb-3 md:h-[240px] md:w-[100%] object-cover'
          />
          <div className='flex justify-between mb-2 items-center'>
            <div className='flex items-center gap-2'>
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
            </div>

            <div className='flex gap-1 items-center'>
              <img src='/icons8-star-48.png' height={21} width={21} />
              <p className='text-[#4F4F4F] text-xs'>{stay.rating}</p>
            </div>
          </div>
          <h2 className='font-semibold text-sm'>{stay.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default StayPreview
