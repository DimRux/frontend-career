import { useState } from 'react';
import FilterItem from '../filterList/filterItem/FilterItem';
import Checkbox from '../checkbox/Checkbox';
import NestedLayout from '../nestedLayout/NestedLayout';

const AdditionalFilters = ({ list }) => {
  const [isOpenFilter, setIsOpenFilter] = useState(() =>
    Object.fromEntries(list.map((_, index) => [index, false]))
  );

  const toggleFilter = (e, index) => {
    e.stopPropagation();
    setIsOpenFilter((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return list.map((item, index) => (
    <div key={index}>
      <FilterItem
        iconName={item.icon}
        text={item.title}
        isOpenFilter={isOpenFilter[index]}
        onClick={(e) => {
          toggleFilter(e, index);
        }}
      >
        <NestedLayout>
          {item.radio && (
            <Checkbox
              list={item.radio}
              type='radio'
              id={item.id}
              needBlockedMainScroll={true}
            />
          )}
          {item.checkbox && (
            <Checkbox
              list={item.checkbox}
              type='checkbox'
              id={item.id}
              needBlockedMainScroll={true}
            />
          )}
        </NestedLayout>
      </FilterItem>
    </div>
  ));
};

export default AdditionalFilters;
