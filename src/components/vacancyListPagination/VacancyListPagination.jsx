import { useEffect } from "react";
import { useVacancyStore } from "../../store/vacancyStore"
import { Pagination } from "../pagination/Pagination"
import VacancyList from "../vacancyList/VacancyList"
import { CARD_FOR_PAGE } from '../../constatns';

import styles from './vacancyListPagination.module.css'

export const VacancyListPagination = () => {
  const { page, setPage, totalCountPage, fetch, loading, error } = useVacancyStore()

  useEffect(() => {
    fetch('', false, page);
  }, [page])

  if (error) {
    return error;
  }

  return (
    <>
      <VacancyList />
      <Pagination
        className={styles.pagination}
        currentPage={page}
        totalCount={totalCountPage}
        pageSize={CARD_FOR_PAGE}
        onPageChange={page => setPage(page)}
        disabled={loading}
      />
    </>
  )
}