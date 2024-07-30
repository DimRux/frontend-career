import { useEffect, useState } from "react";
import FilterItem from "../filterList/filterItem/FilterItem";
import Checkbox from "../checkbox/Checkbox";
import NestedLayout from "../nestedLayout/NestedLayout";
import { useFiltersStore } from "../../store/filtersStore";
import { useClickOutside } from "../../hooks/useClickOutside";
import { otherFiltersData } from "../../data/filterData";
import ModalLayout from "../modalLayout/ModalLayout";

const AdditionalFilters = ({ className }) => {
  const { params, set, isChecked } = useFiltersStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(() =>
    Object.fromEntries(otherFiltersData.map((_, index) => [index, false]))
  );
  const [filtersCount, setFiltersCount] = useState({});
  const totalCount = Object.keys(filtersCount).reduce(
    (acc, key) => acc + filtersCount[key],
    0
  );

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
    otherFiltersData.forEach((dropdown) => {
      let count = 0;

      dropdown.items.forEach((filterItem) => {
        const filter = params[filterItem.name];
        const isSelected = Array.isArray(filter)
          ? filter.some((dropdown) => dropdown === filterItem.value)
          : filter && filter === filterItem.value;
        if (isSelected) count++;
      });
      setFiltersCount((prev) => ({
        ...prev,
        [dropdown.text]: count,
      }));
    });
  }, [params]);

  return (
    <FilterItem
      ref={ref}
      iconName="filter"
      text="Дополнительные фильтры"
      onClick={() => setShowDropdown((prev) => !prev)}
      isOpenFilter={showDropdown}
      level="high"
      className={className}
      count={totalCount}
    >
      <ModalLayout>
        {otherFiltersData.map((item, index) => (
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
