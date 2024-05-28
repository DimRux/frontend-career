import React from 'react';
import styles from './Main.module.css';
import FilterList from '../../components/filterList/FilterList';
import VacancyList from '../../components/vacancyList/VacancyList';

const Main = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <FilterList />
        <VacancyList/>
      </div>
    </main>
  );
};

export default Main;
