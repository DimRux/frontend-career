import React, { useState } from 'react';
import styles from './VacancyBlock.module.css';
import VacancyCard from './vacancyCard/VacancyCard';

const VacancyBlock = ({ title, cards }) => {
  return (
    <li className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.cardsBlock}>
        {cards.map((card, index) => (
          <VacancyCard card={card} index={index} key={index} />
        ))}
      </ul>
    </li>
  );
};

export default VacancyBlock;
