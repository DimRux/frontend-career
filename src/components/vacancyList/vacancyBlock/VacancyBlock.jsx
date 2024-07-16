import React from 'react';
import styles from './VacancyBlock.module.css';
import VacancyCard from './vacancyCard/VacancyCard';
import { formatTitleDate } from '../../../utils/format-date';
import { useVacancyHidden } from '../../../store';

const VacancyBlock = ({ title, cards }) => {

  const {hiddenVacancy} = useVacancyHidden()

  const isHidden = cards.filter(el => hiddenVacancy.includes(el.id)).length === cards.length
  
  const titleFormat = formatTitleDate(title);


  return (
    !isHidden ? <li className={styles.wrapper}>
      <h3 className={styles.title}>{titleFormat}</h3>
      <ul className={styles.cardsBlock}>
        {cards.map((card) => (
          <VacancyCard card={card} key={card.id} />
        ))}
      </ul>
    </li> : null
  );
};

export default VacancyBlock;
