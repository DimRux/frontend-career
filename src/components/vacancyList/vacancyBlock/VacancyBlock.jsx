import React from 'react';
import styles from './VacancyBlock.module.css';
import VacancyCard from './vacancyCard/VacancyCard';
import { formatTitleDate } from '../../../utils/format-date';

const VacancyBlock = ({ title, cards }) => {
  
  const titleFormat = formatTitleDate(title);

  return (
    <li className={styles.wrapper}>
      <h3 className={styles.title}>{titleFormat}</h3>
      <ul className={styles.cardsBlock}>
        {cards.map((card) => (
          <VacancyCard card={card} key={card.id} />
        ))}
      </ul>
    </li>
  );
};

export default VacancyBlock;
