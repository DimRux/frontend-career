import { useEffect, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useFiltersStore } from "../../store/filtersStore";
import Checkbox from "../checkbox/Checkbox";
import FilterItem from "../filterList/filterItem/FilterItem";
import ModalLayout from "../modalLayout/ModalLayout";
import areasData from "../../data/areasData.json";
import styles from "./CityFilter.module.css";
import { useResize } from "../../hooks/useResize";
import { ACTIVE_ITEMS } from "../../constants/constants";

const CityFilter = ({ className, isMiniMobile, changeActiveItem }) => {
  const { params, set, isChecked, inputValue, setInputValue } =
    useFiltersStore();
  const [showDropdown, setShowDropdown] = useState(false);

  const ref = useClickOutside(() => {
    setShowDropdown(false);
  });

  useEffect(() => {
    if (showDropdown) {
      changeActiveItem();
    }
  }, [isMiniMobile])

  const flat = (arr) =>
    arr.reduce(
      (prev, cur) => [
        ...prev,
        { type: "checkbox", name: "area", value: cur.id, text: cur.name },
        ...flat(cur.areas),
      ],
      []
    );

  const allItems = flat(areasData);
  const autocompleteItems = allItems.filter((item) =>
    item.text.toLowerCase().includes(inputValue.toLowerCase())
  );
  const selectedItems = allItems.filter((item) =>
    params.area.some((areaNumber) => areaNumber === item.value)
  );

  const isShown =
    showDropdown && (selectedItems.length > 0 || inputValue.length >= 3);

  return (
    <FilterItem
      ref={ref}
      iconName="plane"
      type="input"
      text="Город"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onClick={() => { setShowDropdown(true); changeActiveItem() }}
      isOpenFilter={isShown}
      className={`${className} ${isShown ? styles.dropdownOpened : ""}`}
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
