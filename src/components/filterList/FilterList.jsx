import React, { useState } from 'react';
import styles from './FilterList.module.css';
import FilterItem from './filterItem/FilterItem';

const FilterList = () => {
  return (
    <ul className={styles.wrapper}>
      <FilterItem iconName={'plane'}>Город</FilterItem>
      <FilterItem iconName={'briefCase'} needChevron={true}>
        Тип занятости
      </FilterItem>
      <FilterItem iconName={'filter'} needChevron={true}>
        Дополнительные фильтры
      </FilterItem>
    </ul>
  );
};

export default FilterList;
