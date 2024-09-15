import { useState } from "react"
export default function Pr12() {
  const [currentPage ,setCurrentPage] = useState(1);
const indexofLastItem = currentPage*itemsPerPage;
const indexofFirstItem = indexofLastItem - itemsPerPage;
const currentPageItems = items.slice(indexofFirstItem,indexofLastItem);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const itemsPerPage = 2;

  const items = []; // Define the 'items' variable
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        className={currentPage === number ? "active" : ""}


      >
        <a onClick={() => paginate(number)}>{number}</a>
      </li> 
    );
  });
  return (
    <div>
      <ul>{currentPageItems}</ul>
      <ul>{renderPageNumbers}</ul>
    </div>
  );
}