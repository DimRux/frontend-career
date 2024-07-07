import React from 'react';
import FilterList from '../../components/filterList/FilterList';
import { VacancyListPagination } from '../../components/vacancyListPagination/VacancyListPagination';

import styles from './Main.module.css';

const Main = () => {

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <FilterList />
        <VacancyListPagination />
      </div>
    </main>
  );
};

export default Main;
