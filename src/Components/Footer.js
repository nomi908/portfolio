import React from 'react'

function Footer() {
  return (
    <div className='p-3 gap-3 lg:justify-between bg-purple-200 lg:px-24 flex items-center'>
      <div>
        <img src='https://orido-react.vercel.app/img/logo/logo.png' alt='logo' className='w-24 '></img>

      </div>

      <div className='text-[8px] lg:text-xl'>
      © 2024 by Abdul Mannan. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
