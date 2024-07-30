import React from "react";
import { DOTS } from "../../constants";
import { usePagination } from "../../hooks/usePagination";
import Button from "../button/Button";
import styles from "./pagination.module.css";

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  className,
  disabled,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className={`${styles.wrapper} ${className}`}>
      {paginationRange.map((pageNumber, index) => (
        <li key={index} className={pageNumber === DOTS ? styles.item : ""}>
          {pageNumber === DOTS ? (
            DOTS
          ) : (
            <Button
              className={`${styles.btn} ${
                pageNumber === currentPage && styles.active
              }`}
              onClick={() => onPageChange(pageNumber)}
              disabled={disabled}
            >
              {pageNumber}
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};
