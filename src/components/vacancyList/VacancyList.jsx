import VacancyBlock from "./vacancyBlock/VacancyBlock";
import { useVacancyStore } from "../../store/vacancyStore";
import styles from "./VacancyList.module.css";
import SkeletonVacancyList from "./SkeletonVacancyList";

const VacancyList = () => {
  const [vacancies, loadingVacancies] = useVacancyStore((state) => [
    state.list,
    state.loading,
  ]);
  return (
    <ul className={styles.wrapper}>
      {loadingVacancies ? (
        <SkeletonVacancyList />
      ) : !vacancies.length ? (
        <div className={styles.emptyState}>
          Не удалось найти вакансии с выбранными параметрами.
          <br />
          Попробуйте другие.
        </div>
      ) : (
        vacancies.map((item) => (
          <VacancyBlock key={item.date} title={item.date} cards={item.items} />
        ))
      )}
    </ul>
  );
};

export default VacancyList;
