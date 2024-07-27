import { useState } from "react";
import { useFiltersStore } from "../../store/filtersStore";
import FilterItem from "../filterList/filterItem/FilterItem";
import ModalLayout from "../modalLayout/ModalLayout";
import Checkbox from "../checkbox/Checkbox";
import { useClickOutside } from "../../hooks/useClickOutside";
import { briefCase } from "../../data/filterData";
import styles from "./EmploymentFilter.module.css";

const EmploymentFilter = ({ className }) => {
  const { params, set, isChecked } = useFiltersStore();
  const [showDropdown, setShowDropdown] = useState(false);

  const ref = useClickOutside(() => {
    setShowDropdown(false);
  });

  return (
    <FilterItem
      ref={ref}
      iconName="briefCase"
      text="Тип занятости"
      onClick={() => setShowDropdown((prev) => !prev)}
      isOpenFilter={showDropdown}
      className={className}
      count={params.employment.length}
    >
      <ModalLayout className={styles.briefCase}>
        <Checkbox
          list={briefCase}
          onChange={(field, value) => set(field, value)}
          isChecked={(field, value) => isChecked(field, value)}
        />
      </ModalLayout>
    </FilterItem>
  );
};

export default EmploymentFilter;
