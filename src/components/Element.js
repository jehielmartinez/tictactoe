import React from 'react'

function Element ({ value, handleClick }) {
  return (
    <div
      data-testid='element'
      onClick={handleClick}
      className='element'
    >
      {value === 'a' ? null : value}
    </div>
  )
}

export default Element
