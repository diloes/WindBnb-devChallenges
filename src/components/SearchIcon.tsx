const SearchIcon = () => {
  return (
    <svg
      className='h-4 w-4 text-red-500'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      stroke-width='2'
      stroke='currentColor'
      fill='none'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      {' '}
      <path stroke='none' d='M0 0h24v24H0z' /> <circle cx='10' cy='10' r='7' />{' '}
      <line x1='21' y1='21' x2='15' y2='15' />
    </svg>
  )
}

export default SearchIcon
