import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useFiltersStore } from "../../store/filtersStore";
import Checkbox from "../checkbox/Checkbox";
import FilterItem from "../filterList/filterItem/FilterItem";
import ModalLayout from "../modalLayout/ModalLayout";
import areasData from "../../data/areasData.json";
import styles from "./CityFilter.module.css";

const CityFilter = ({ className }) => {
  const { params, set, isChecked, reset, isChanged } = useFiltersStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const ref = useClickOutside(() => {
    setShowDropdown(false);
  });

  // const autocompleteItems = areasData.flatMap((item) => [
  //   item.name,
  //   item.areas,
  // ]);

  const flat = (arr) =>
    arr.reduce(
      (prev, cur) => [
        ...prev,
        { type: "checkbox", name: "city", value: cur.name, text: cur.name },
        ...flat(cur.areas),
      ],
      []
    );

  const selectedItems = params.city.map((item) => ({
    type: "checkbox",
    name: "city",
    value: item,
    text: item,
  }));
  const autocompleteItems = flat(areasData).filter((item) =>
    item.value.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <FilterItem
      ref={ref}
      iconName="plane"
      type="input"
      text="Город"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onClick={() => setShowDropdown(true)}
      isOpenFilter={
        showDropdown && (selectedItems.length > 0 || inputValue.length >= 3)
      }
      className={className}
      count={selectedItems.length}
    >
      <ModalLayout className={styles.dropdown}>
        <Checkbox
          list={inputValue.length >= 3 ? autocompleteItems : selectedItems}
          onChange={(field, value) => set(field, value)}
          isChecked={(field, value) => isChecked(field, value)}
        />
      </ModalLayout>
    </FilterItem>
  );
};

export default CityFilter;
