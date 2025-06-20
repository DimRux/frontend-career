import Button from "../button/Button";
import AdditionalFilters from "../additionalFilters/AdditionalFilters";
import { useFiltersStore } from "../../store/filtersStore";
import CityFilter from "../cityFilter/CityFilter";
import EmploymentFilter from "../employmentFilter/EmploymentFilter";
import styles from "./FilterList.module.css";
import { useEffect, useRef, useState } from "react";
import { updateUrlWithFilters } from "../../utils/updateUrlWithFilters";
import { useResize } from "../../hooks/useResize";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ACTIVE_ITEMS } from "../../constants/constants";

const FilterList = () => {
  const { params, reset, isChanged } = useFiltersStore();
  const isTablet = useResize();
  const isMobile = useResize(767);
  const isMobileRef = useRef(isMobile);

  isMobileRef.current = isMobile;

  const isResetBtnShown = isChanged();
  const [activeItem, setActiveItem] = useState(ACTIVE_ITEMS.none)
  const ref = useClickOutside(() => setActiveItem(ACTIVE_ITEMS.none));

  useEffect(() => {
    updateUrlWithFilters(params);
  }, [params]);

  useEffect(() => {
    if (!isMobile) {
      setActiveItem(ACTIVE_ITEMS.none);
    }
  }, [isMobile])

  const changeItem = (filter) => {
    if (isMobileRef.current && activeItem !== filter) {
      setActiveItem(filter);
    }

    if (isMobileRef.current && activeItem === filter) {
      setActiveItem(ACTIVE_ITEMS.none);
    }
  }

  return (
    <section ref={ref} className={styles.wrapper}>
      <ul className={`${styles.list} ${activeItem !== ACTIVE_ITEMS.none ? styles.hasActiveItem : ''}`}>
        {activeItem !== ACTIVE_ITEMS.dropdown && (
          <CityFilter
            className={`${styles.filterItem} ${styles.input}`}
            isMobile={isMobile}
            changeActiveItem={() => changeItem(ACTIVE_ITEMS.input)}
            setActiveItem={setActiveItem}
          />
        )}
        {!isTablet && <EmploymentFilter className={styles.filterItem} />}
        {activeItem !== ACTIVE_ITEMS.input && (
          <AdditionalFilters
            className={`${styles.filterItem} ${activeItem === ACTIVE_ITEMS.dropdown && styles.filterItemBorder}`}
            isActived={activeItem === ACTIVE_ITEMS.dropdown}
            isMobile={isMobile}
            changeActiveItem={() => changeItem(ACTIVE_ITEMS.dropdown)}
            setActiveItem={setActiveItem}
          />
        )}
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
