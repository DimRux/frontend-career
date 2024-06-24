import React from 'react';
import { DOTS } from '../../constatns';
import { usePagination } from '../../hooks/usePagination';
import Button from '../button/Button';
import styles from './pagination.module.css'

export const Pagination = ({ onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className }) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul
      className={`${styles.wrapper} ${className}`}
    >
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li
            key={index}
            className={`${styles.item}`}
          >{DOTS}</li>;
        }
        return (
          <li key={index}>
            <Button
              className={`${styles.btn} ${pageNumber === currentPage && styles.active}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};