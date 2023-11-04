import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from "react-icons/ai"

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-gray-800  mx-auto'>
       <div className=' text-neutral-200 text-center'>
         <h1 className='text-5xl lg:text-7xl  font-bold mb-5 animate-bounce'>Welcome to our blog</h1>
         <p className='text-gray-100 lg:h-3/4 mx-auto mb-5 font-primary tracking-wide '>Explore how mindfulness can enhance your creativity. Learn how to tap into  your inner innovator <br /> with  these practical tips."</p>
         <div>
            <Link to="/about" className='font-medium hover:text-pink-600 inline-flex items-center py-1'>Learn more<AiOutlineArrowRight className='ml-2'/></Link>
         </div>
       </div>
    </div>
  )
}

export default Banner
