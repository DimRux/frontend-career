import Button from "../button/Button";
import AdditionalFilters from "../additionalFilters/AdditionalFilters";
import { useFiltersStore } from "../../store/filtersStore";
import CityFilter from "../cityFilter/CityFilter";
import EmploymentFilter from "../employmentFilter/EmploymentFilter";
import styles from "./FilterList.module.css";
import { useEffect, useState } from "react";
import { updateUrlWithFilters } from "../../utils/updateUrlWithFilters";
import { useResize } from "../../hooks/useResize";
import { useClickOutside } from "../../hooks/useClickOutside";

const FilterList = () => {
  const { params, reset, isChanged } = useFiltersStore();
  const isMobile = useResize();
  const isMiniMobile = useResize(375);

  const isResetBtnShown = isChanged();
  const ACTIVE_ITEMS = { input: 'input', dropdown: 'dropdown', none: 'none' };
  const [activeItem, setActiveItem] = useState(ACTIVE_ITEMS.none) 
  const ref = useClickOutside(() => setActiveItem(ACTIVE_ITEMS.none));

  useEffect(() => {
    updateUrlWithFilters(params);
  }, [params]);

  return (
    <section ref={ref} className={styles.wrapper}>
      <ul className={`${styles.list} ${activeItem !== ACTIVE_ITEMS.none ? styles.hasActiveItem : ''}`}>
        {activeItem !== ACTIVE_ITEMS.dropdown && <CityFilter className={`${styles.filterItem} ${styles.input}`} changeActiveItem={() => isMiniMobile ? setActiveItem(ACTIVE_ITEMS.input): undefined} />}
        {!isMobile && <EmploymentFilter className={styles.filterItem} />}
        {activeItem !== ACTIVE_ITEMS.input && <AdditionalFilters className={styles.filterItem} isActived={activeItem === ACTIVE_ITEMS.dropdown} changeActiveItem={() => isMiniMobile ? setActiveItem(ACTIVE_ITEMS.dropdown): undefined} />}
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
