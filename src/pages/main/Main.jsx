import React from "react";
import FilterList from "../../components/filterList/FilterList";
import { VacancyListPagination } from "../../components/vacancyListPagination/VacancyListPagination";

import styles from "./Main.module.css";
import { VacancyPage } from "../../components/vacancyPage/VacancyPage";
import { useVacancyLocal } from "../../store";

const Main = () => {
  const { isOpen } = useVacancyLocal();
  return (
    <main className={styles.wrapper}>
      <div className={`${styles.container} ${isOpen && styles.hidden}`}>
        <FilterList />
        <VacancyListPagination />
      </div>
      <VacancyPage />
    </main>
  );
};

export default Main;
