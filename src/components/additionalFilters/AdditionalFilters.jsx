import { useState } from "react";
import FilterItem from "../filterList/filterItem/FilterItem";
import Checkbox from "../checkbox/Checkbox";
import NestedLayout from "../nestedLayout/NestedLayout";
import { useFiltersStore } from "../../store/filtersStore";
import { useClickOutside } from "../../hooks/useClickOutside";
import { otherFiltersData } from "../../data/filterData";
import ModalLayout from "../modalLayout/ModalLayout";

const AdditionalFilters = ({ className }) => {
  const { set, isChecked } = useFiltersStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(() =>
    Object.fromEntries(otherFiltersData.map((_, index) => [index, false]))
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

  return (
    <FilterItem
      ref={ref}
      iconName="filter"
      text="Дополнительные фильтры"
      onClick={() => setShowDropdown((prev) => !prev)}
      isOpenFilter={showDropdown}
      level="high"
      className={className}
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
