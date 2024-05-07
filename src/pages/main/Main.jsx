import React from 'react';
import styles from './Main.module.css';
import FilterList from '../../components/filterList/FilterList';
import VacancyList from '../../components/vacancyList/VacancyList';
import { API_DATA } from '../../data/apiData';

const Main = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <FilterList />
        <VacancyList data={API_DATA} />
      </div>
    </main>
  );
};

export default Main;
