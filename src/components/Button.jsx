import React from 'react'

const Button = ({ button }) => {
  return (
    <div>
      <button
        className='bg-text hover:bg-text/90 text-background font-semibold border px-5 py-3 rounded-2xl'>
        {button}
        <i class="ri-arrow-right-up-line font-bold"></i>
      </button>
    </div>
  )
}

export default Button
