import React from 'react'
import BlogsPage from '../componets/BlogsPage'
import Banner from '../componets/Banner'

const Blogs = () => {
  return (
    <div>
      <Banner text={'Blog page'} />
      {/* ALL BLOGS CONTAINER */}
      <div className='max-w-7xl mx-auto'>
        <BlogsPage />
      </div>
    </div>
  )
}

export default Blogs
