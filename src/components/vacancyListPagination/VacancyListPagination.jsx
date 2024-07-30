import { useEffect } from "react";
import { useVacancyStore } from "../../store/vacancyStore";
import { Pagination } from "../pagination/Pagination";
import VacancyList from "../vacancyList/VacancyList";

import styles from "./vacancyListPagination.module.css";
import { useFiltersStore } from "../../store/filtersStore";

export const VacancyListPagination = () => {
  const { params } = useFiltersStore();
  const { page, setPage, totalCountPage, fetch, loading, error } =
    useVacancyStore();

  useEffect(() => {
    setPage(1);
  }, [params]);

  useEffect(() => {
    fetch("Москва", false, page, params);
  }, [page, params]);

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
        onPageChange={(page) => setPage(page)}
        disabled={loading}
      />
    </>
  );
};
