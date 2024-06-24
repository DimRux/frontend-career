import React, { useEffect } from 'react';
import VacancyBlock from './vacancyBlock/VacancyBlock';
import { useVacancyStore } from '../../store/vacancyStore';
import styles from './VacancyList.module.css';
import SkeletonVacancyList from './SkeletonVacancyList';


const VacancyList = () => {
  const [vacancies, fetchVacancy, loadingVacancies, errorVacancies] = useVacancyStore(
    (state) => [
      state.list,
      state.fetch,
      state.loading,
      state.error
    ]
  );
  useEffect(() => {
    fetchVacancy('', false, 1);
  }, []);

  if (errorVacancies) {
    return errorVacancies;
  }

  return (
    <ul className={styles.wrapper}>
      {
        loadingVacancies
          ? <SkeletonVacancyList />
          : vacancies.map(item => <VacancyBlock key={item.date} title={item.date} cards={item.items} />)
      }
    </ul>
  );
};

export default VacancyList;
