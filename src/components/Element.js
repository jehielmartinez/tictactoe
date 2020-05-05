import React from 'react'

function Element ({ value, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className='element'
    >
      {value === 'a' ? null : value}
    </div>
  )
}

export default Element
