import React from 'react'
import Banner from '../componets/Banner'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai"

const Home = () => {
  return (
    <div>
     <Banner text = {'Home Page'}>
        <p className='text-gray-100 lg:h-3/4 mx-auto mb-5 font-primary tracking-wide '>Explore how mindfulness can enhance your creativity. Learn how to tap into  your inner innovator <br /> with  these practical tips."</p>
        <div>
          <Link to="/about" className='font-medium hover:text-pink-600 inline-flex items-center py-1'>Learn more<AiOutlineArrowRight className='ml-2' /></Link>
        </div>
      </Banner>
    </div>
  )
}

export default Home
