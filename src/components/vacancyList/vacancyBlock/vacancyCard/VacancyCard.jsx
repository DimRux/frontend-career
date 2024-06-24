import React from 'react';
import styles from './VacancyCard.module.css';
import Icon from '../../../icon/Icon';

const VacancyCard = ({ card }) => {
  return (
    <li className={styles.card}>
      <div className={styles.main}>
        <div className={styles.headerBlock}>
          <h4 className={styles.title} title={card.name}>
            <a
              href={card.url}
              target='_blank'>{card.name}</a>
          </h4>
          <p className={styles.salary}>{card.salaryFormat}</p>
        </div>
        <div className={styles.controlsBlock}>
          <Icon name={'slashEye'} className={styles.eye} />
        </div>
      </div>
      <div className={styles.additional}>
        <div className={styles.upContent}>
          <a href={card.employerUrl} target='_blank'>{card.company}</a>
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
