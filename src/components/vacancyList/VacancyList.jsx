import React, { useState } from 'react';
import styles from './VacancyList.module.css';
import VacancyBlock from './vacancyBlock/VacancyBlock';

const VacancyList = ({ data }) => {
  return (
    <ul className={styles.wrapper}>
      {data.map((item) => (
        <VacancyBlock key={item.date} title={item.date} cards={item.cards} />
      ))}
    </ul>
  );
};

export default VacancyList;
