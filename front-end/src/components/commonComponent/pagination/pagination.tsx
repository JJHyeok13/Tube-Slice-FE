import React, { useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
  page: number;
  pageNumbers: number[];
  handlePageChange: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  pageNumbers,
  handlePageChange,
}) => {
  return (
    <div>
      <FaChevronLeft />
      {pageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          onClick={handlePageChange(pageNumber)}
          selected={pageNumber === page + 1}
          disabled={pageNumber === page}
        >
          {pageNumber}
        </span>
      ))}
      <FaChevronRight />
    </div>
  );
};

export default Pagination;
