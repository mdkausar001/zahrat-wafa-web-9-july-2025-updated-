import React from 'react'

const ButtonOutline = ({ children }) => {
  return (
    <button className='whitespace-nowrap font-medium tracking-wide py-2 md:px-6 px-4 border border-orange-250 text-orange-250 bg-white outline-none  capitalize hover:bg-orange-250 hover:text-white-500 transition-all hover:shadow-orange '>
      {' '}
      {children}
    </button>
  )
}
export default ButtonOutline
