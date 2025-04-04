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
  const isMobile = useResize();
  const isMiniMobile = useResize(375);
  const isMiniMobileRef = useRef(isMiniMobile);

  isMiniMobileRef.current = isMiniMobile;

  const isResetBtnShown = isChanged();
  const [activeItem, setActiveItem] = useState(ACTIVE_ITEMS.none)
  const ref = useClickOutside(() => setActiveItem(ACTIVE_ITEMS.none));

  useEffect(() => {
    updateUrlWithFilters(params);
  }, [params]);

  useEffect(() => {
    if (!isMiniMobile) {
      setActiveItem(ACTIVE_ITEMS.none);
    }
  }, [isMiniMobile])

  const changeItem = (filter) => {
    if (isMiniMobileRef.current && activeItem !== filter) {
      setActiveItem(filter);
    }

    if (isMiniMobileRef.current && activeItem === filter) {
      setActiveItem(ACTIVE_ITEMS.none);
    }
  }

  return (
    <section ref={ref} className={styles.wrapper}>
      <ul className={`${styles.list} ${activeItem !== ACTIVE_ITEMS.none ? styles.hasActiveItem : ''}`}>
        {activeItem !== ACTIVE_ITEMS.dropdown && (
          <CityFilter
            className={`${styles.filterItem} ${styles.input}`}
            isMiniMobile={isMiniMobile}
            changeActiveItem={() => changeItem(ACTIVE_ITEMS.input)}
            setActiveItem={setActiveItem}
          />
        )}
        {!isMobile && <EmploymentFilter className={styles.filterItem} />}
        {activeItem !== ACTIVE_ITEMS.input && (
          <AdditionalFilters
            className={styles.filterItem}
            isActived={activeItem === ACTIVE_ITEMS.dropdown}
            isMiniMobile={isMiniMobile}
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
