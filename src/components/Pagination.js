import React from "react";
import ReactPaginate from 'react-paginate';

function Pagination({handlePageClick,pageCount}){
  return(
    <ReactPaginate
    nextLabel="next >"
    onPageChange={handlePageClick}

    pageRangeDisplayed={9}
    pageCount={pageCount}

    previousLabel="< previous"
    renderOnZeroPageCount={null}

    pageClassName="page-item"
    pageLinkClassName="page-link"
    previousClassName="page-item"
    previousLinkClassName="page-link"
    nextClassName="page-item"
    nextLinkClassName="page-link"
    breakLabel="..."
    breakClassName="page-item"
    breakLinkClassName="page-link"
    containerClassName="pagination"
    activeClassName="active" 
  />
  )
}

export default Pagination;