import React from 'react';

const Pagination = ({
  onPageChange,
  currentPage,
  blogdata,
  pageSize
}) => {

  const totalPages = Math.ceil(blogdata.length / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li key={pageNumber}>
        <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
      </li>
    ));
  }

  const generateNumberLinks = (start, end) => {
    const numberLinks = [];
    for (let i = start; i <= end; i++) {
      numberLinks.push(
        <li key={i} className={i === currentPage ? "activePagination" : ""}>
          <a href="#" onClick={() => onPageChange(i)}>{i}</a>
        </li>
      );
    }
    return numberLinks;
  }

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
        </li>
        {generateNumberLinks(1, 12)}
        {renderPaginationLinks()}
        <li>
          <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
