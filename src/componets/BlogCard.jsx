import React from 'react'
import {Link} from 'react-router-dom'
import {BiSolidUser} from 'react-icons/bi'

const BlogCard = ({
  blogdata,
   currentPage,
   selectedCategory,
   pageSize
  }) => {
  const filterBlogs = blogdata.filter((blogs) => !selectedCategory || blogs.category === selectedCategory).slice((currentPage -1) *pageSize, currentPage*pageSize)

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
       {filterBlogs.map((blog) => (
         <Link key={blog.id} className='p-5 shadow-md shadow-red-800/30 rounded cursor-pointer'>
           <div >
             <img src={blog.image} alt="/" className='w-full'/>
           </div>
           <h3 className='mt-4 mb-2 font-bold hover:text-gray-600 cursor-pointer'>{blog.title}</h3>
           <p className='mb-2 inline-flex items-center mr-2 text-pink-400'><BiSolidUser/>{blog.author}</p>
           <p className='text-pink-400'>Published:{blog.published_date}</p>
         </Link>
       ))}
    </div>
  )
}

export default BlogCard