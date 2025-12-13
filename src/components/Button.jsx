import React from 'react'

const Button = ({button}) => {
  return (
    <div>
      <button className='text-text border border-text px-5 py-3 rounded-2xl'>{button} <i class="ri-arrow-right-up-line"></i></button>
    </div>
  )
}

export default Button
