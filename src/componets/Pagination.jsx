import React, { useEffect, useState } from 'react';

const Pagination = ({ blogdata, setData }) => {

  const pageSize = 12
  const totalPages = Math.ceil(blogdata.length / pageSize);
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setData(blogdata.slice(startIndex, endIndex))
    scrolToTop()
  }, [endIndex, startIndex])

  const scrolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(p => p + 1)
      setStartIndex(prev => prev + pageSize)
      setEndIndex(prev => prev + pageSize)
    } else if (currentPage === totalPages) {
      setCurrentPage(totalPages)
      setStartIndex(prev => prev + pageSize)
      setEndIndex(prev => prev + pageSize)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(p => p - 1)
      setStartIndex(prev => prev - pageSize)
      setEndIndex(prev => prev - pageSize)
    } else if (currentPage === 1) {
      setCurrentPage(1)
      setStartIndex(prev => prev - pageSize)
      setEndIndex(prev => prev - pageSize)
    }
  }

  const onPageChange = (number) => {
    setCurrentPage(number)
    setEndIndex(number * pageSize)
    setStartIndex((number - 1) * pageSize)
  }

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li key={pageNumber}>
        <button className={currentPage === pageNumber ? "bg-gray-700 text-white px-3 py-1 rounded" : ""} onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
      </li>
    ));
  }

  return (
    <div>
      <ul className={"flex gap-3 justify-center items-center my-5"}>
        <li>
          <button className={"disabled:opacity-50"} onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
        </li>
        {/* {generateNumberLinks(1, 12)} */}
        {renderPaginationLinks()}
        <li>
          <button className={"disabled:opacity-50"} onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
