const EditSearch = ({ handleMenuClose }: { handleMenuClose: () => void }) => {
  return (
    <section className='grid h-[80vh] font-mulish fixed z-50 inset-0 bg-white p-4'>
      <div className='flex justify-between items-center h-[5%]'>
        <p className='font-bold text-xs'>Edit your search</p>
        <p onClick={handleMenuClose}>X</p>
      </div>
    </section>
  )
}

export default EditSearch
