import React from 'react'
import BlogsPage from '../componets/BlogsPage'

const Blogs = () => {
  return (
    <div>
       <div className='py-40 bg-gray-800 text-center text-white px-4'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 animate-bounce duration-75 shake 0.4s'>Welcome to our Blog page</h1>
       </div>

         {/* ALL BLOGS CONTAINER */}
         <div className='max-w-7xl mx-auto'>
          <BlogsPage/>
          </div>
    </div>
  )
}

export default Blogs
