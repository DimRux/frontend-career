import Button from "../button/Button";
import AdditionalFilters from "../additionalFilters/AdditionalFilters";
import { useFiltersStore } from "../../store/filtersStore";
import CityFilter from "../cityFilter/CityFilter";
import EmploymentFilter from "../employmentFilter/EmploymentFilter";
import styles from "./FilterList.module.css";
import { useEffect } from "react";
import { updateUrlWithFilters } from "../../utils/updateUrlWithFilters";

const FilterList = () => {
  const { params, reset, isChanged } = useFiltersStore();

  const isResetBtnShown = isChanged();

  useEffect(() => {
    updateUrlWithFilters(params);
  }, [params]);

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        <CityFilter className={styles.filterItem} />
        <EmploymentFilter className={styles.filterItem} />
        <AdditionalFilters className={styles.filterItem} />
      </ul>
      {isResetBtnShown && (
        <div className={styles.resetWrapper}>
          <Button className={styles.reset} onClick={reset}>
            Сбросить все фильтры
          </Button>
        </div>
      )}
    </section>
  );
};

export default FilterList;
