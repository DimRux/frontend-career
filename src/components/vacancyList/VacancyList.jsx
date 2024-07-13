import VacancyBlock from './vacancyBlock/VacancyBlock';
import { useVacancyStore } from '../../store/vacancyStore';
import styles from './VacancyList.module.css';
import SkeletonVacancyList from './SkeletonVacancyList';



const VacancyList = () => {
  const [vacancies, loadingVacancies] = useVacancyStore(
    (state) => [
      state.list,
      state.loading,
    ]
  );
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
