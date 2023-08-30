import React, { useState } from 'react';

const PaginationRow = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; 

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination-row center">
      <button onClick={goToPreviousPage}>&lt;</button>
      <input
        type="text"
        value={`${currentPage} / ${totalPages}`}
        readOnly
      />
      <button onClick={goToNextPage}>&gt;</button>
    </div>
  );
};

export default PaginationRow;