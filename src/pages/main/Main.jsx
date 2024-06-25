import React, { useEffect } from 'react';
import styles from './Main.module.css';
import FilterList from '../../components/filterList/FilterList';
import VacancyList from '../../components/vacancyList/VacancyList';
import { Pagination } from '../../components/pagination/Pagination';
import { useVacancyStore } from '../../store/vacancyStore';
import { CARD_FOR_PAGE } from '../../constatns';


const Main = () => {

  const { page, setPage, totalCountPage, fetch, loading } = useVacancyStore()

  useEffect(() => {
    fetch('', false, page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [page])

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <FilterList />
        <VacancyList />
        <Pagination
          className={styles.pagination}
          currentPage={page}
          totalCount={totalCountPage}
          pageSize={CARD_FOR_PAGE}
          onPageChange={page => setPage(page)}
          disabled={loading}
        />
      </div>
    </main>
  );
};

export default Main;
