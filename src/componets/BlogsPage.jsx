import React, { useEffect, useState } from 'react'
import  {blogdata  }from '../api/DataStore'
import BlogCard from './BlogCard'
import Pagination from './Pagination'


const BlogsPage = () => {
   console.log(blogdata)

   const [currentPage, setCurrentPage] =useState(1)
   const [selectedCategory, setSelectedCategory] =useState(null)
   const [activeCategory, setActiveCategory] =useState(null)

  const pageSize = 12 //blogs per page

 useEffect(() =>{
   if(selectedCategory){
    blogdata +=`&category=${selectedCategory}`
    blogdata.fetchData(selectedCategory)
 }  
   // For example, blogdata.fetchData(selectedCategory)
 })

 const handlePageChange = () =>{
     setCurrentPage(parseFloat)
 }

 const handleCategoryChange =(category) =>{
    setSelectedCategory(category)
    setCurrentPage(1)
    setActiveCategory(category)
 }
  

  return (
    <div>
       <div>
       
       </div>
         {/* Categoty section */}
       <div>Page Category</div>

       {/* BlogCards section */}
       <div>
         <BlogCard 
         blogdata={blogdata}
         currentPage={currentPage}
         selectedCategory={selectedCategory}
         pageSize={pageSize}
         />
       </div>
       {/* Pagination section */}
       <div>
          <Pagination
           onPageChange={handlePageChange}
           currentPage={currentPage}
           blogdata={blogdata}
           />
       </div>
    </div>
  )
}

export default BlogsPage
