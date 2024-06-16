import React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
  page: number;
  pageNumbers: number[];
  handlePageChange: (newPage: number) => void;
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
          onClick={() => handlePageChange(pageNumber)}
          // @ts-ignore
          selected={pageNumber === page + 1}
          disabled={pageNumber === page}
        >
          {pageNumber + 1}
        </span>
      ))}
      <FaChevronRight />
    </div>
  );
};

export default Pagination;
