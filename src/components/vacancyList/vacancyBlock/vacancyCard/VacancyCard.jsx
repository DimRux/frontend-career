import React from 'react';
import styles from './VacancyCard.module.css';
import Icon from '../../../icon/Icon';

const VacancyCard = ({ index, card }) => {
  return (
    <li key={index} className={styles.card}>
      <div className={styles.main}>
        <div className={styles.headerBlock}>
          <h4 className={styles.title}>{card.title}</h4>
          <p className={styles.salary}>{card.salary}</p>
        </div>
        <div className={styles.controlsBlock}>
          <Icon name={'slashEye'} className={styles.eye} />
        </div>
      </div>
      <div className={styles.additional}>
        <div className={styles.upContent}>
          <p>{card.company}</p>
          <p>{card.city}</p>
        </div>
        <p className={styles.experience}>
          <Icon name={'star'} className={styles.star} />
          {card.experience}
        </p>
      </div>
    </li>
  );
};

export default VacancyCard;
