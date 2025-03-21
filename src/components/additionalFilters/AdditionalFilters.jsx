import { useEffect, useState } from "react";
import FilterItem from "../filterList/filterItem/FilterItem";
import Checkbox from "../checkbox/Checkbox";
import NestedLayout from "../nestedLayout/NestedLayout";
import { useFiltersStore } from "../../store/filtersStore";
import { useClickOutside } from "../../hooks/useClickOutside";
import { otherFiltersData, typeWork } from "../../data/filterData";
import ModalLayout from "../modalLayout/ModalLayout";
import { useResize } from "../../hooks/useResize";
import styles from './AdditionalFilters.module.css'

const AdditionalFilters = ({ className, isActived, changeActiveItem }) => {
  const { params, set, isChecked } = useFiltersStore();
  const isTablet = useResize();
  const isMobile = useResize(767);
  const filteres = Object.fromEntries(otherFiltersData.map((_, index) => [index, false]));
  const allFilteres = Object.fromEntries(typeWork.concat(otherFiltersData).map((_, index) => [index, false]));
  const [resultFilteresData, setResultFilteresData] = useState(isTablet ? typeWork.concat(otherFiltersData) : otherFiltersData)
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(() =>
    isTablet ? allFilteres : filteres
  );
  const [filtersCount, setFiltersCount] = useState({});
  const [totalCount, setTotalCount] = useState(0);


  const ref = useClickOutside(() => {
    setShowDropdown(false);
  });

  const toggleFilter = (e, index) => {
    e.stopPropagation();
    setIsOpenFilter((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    const count = Object.keys(filtersCount).reduce((acc, key) => acc + filtersCount[key], 0);
    setTotalCount(count);
  }, [filtersCount]);

  useEffect(() => {
    setResultFilteresData(isTablet ? typeWork.concat(otherFiltersData) : otherFiltersData);
  }, [isTablet])

  useEffect(() => {
    const newFiltersCount = {};

    resultFilteresData.forEach((dropdown) => {
      let count = 0;

      dropdown.items.forEach((filterItem) => {
        const filter = params[filterItem.name];
        const isSelected = Array.isArray(filter)
          ? filter.some((value) => value === filterItem.value)
          : filter && filter === filterItem.value;
        if (isSelected) count++;
      });

      newFiltersCount[dropdown.text] = count;
    });

    setFiltersCount(newFiltersCount);
  }, [params, resultFilteresData]);

  return (
    <FilterItem
      ref={ref}
      iconName={"filter"}
      text={(isMobile && !isActived) ? "" : "Дополнительные фильтры"}
      onClick={() => {setShowDropdown((prev) => !prev); changeActiveItem()}}
      isOpenFilter={showDropdown}
      level="high"
      className={`${className} ${styles.item}`}
      count={totalCount}
    >
      <ModalLayout>
        {resultFilteresData.map((item, index) => (
          <FilterItem
            key={index}
            iconName={item.icon}
            text={item.text}
            isOpenFilter={isOpenFilter[index]}
            level="low"
            onClick={(e) => {
              toggleFilter(e, index);
            }}
            count={filtersCount[item.text]}
            className={styles.child}
          >
            <NestedLayout>
              <Checkbox
                list={item.items}
                onChange={(field, value) => set(field, value)}
                isChecked={(field, value) => isChecked(field, value)}
              />
            </NestedLayout>
          </FilterItem>
        ))}
      </ModalLayout>
    </FilterItem>
  );
};

export default AdditionalFilters;
