import { useEffect } from "react";
import { useVacancyStore } from "../../store/vacancyStore";
import { Pagination } from "../pagination/Pagination";
import VacancyList from "../vacancyList/VacancyList";
import { CARD_FOR_PAGE } from "../../constants";

import styles from "./vacancyListPagination.module.css";
import { useParamsHandler } from "../../hooks/useParamsHandler";
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
        pageSize={CARD_FOR_PAGE}
        onPageChange={(page) => setPage(page)}
        disabled={loading}
      />
    </>
  );
};
