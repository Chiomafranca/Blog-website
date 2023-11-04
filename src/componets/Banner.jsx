import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Banner = ({ children, text }) => {
  
  return (
    <div className='px-4 py-32 bg-gray-800  mx-auto'>
      <div className=' text-neutral-200 text-center'>
        <TypeAnimation 
          sequence={[
            `Welcome to our ${text}`,
            1000,
            `Welcome to DesignCH`,
            1000,
          ]}
          wrapper="h1"
          speed={50}
          className='text-5xl lg:text-7xl  font-bold mb-5'
          repeat={Infinity}
        />
        {children}
      </div>
    </div>
  )
}

export default Banner
