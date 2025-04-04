import React from "react";
import styles from "./VacancyCard.module.css";
import Icon from "../../../icon/Icon";
import {
  useVacancyHidden,
  useVacancyLocal,
  useVacancyStore,
} from "../../../../store";
import { useResize } from "../../../../hooks/useResize";

const VacancyCard = ({ card }) => {
  const { getVacancyById, close } = useVacancyLocal();
  const { hiddenVacancy, addVacancy, removeVacancy } = useVacancyHidden();
  const { includingHidden } = useVacancyStore();
  const isMobile = useResize(768);
  const isHidden = hiddenVacancy?.includes(card?.id);

  return (
    <li
      className={`${styles.card} ${isHidden && styles.hidden} ${
        includingHidden && isHidden && styles.included
      }`}
      onClick={(e) => {
        if (e.target instanceof HTMLAnchorElement) return;
        close();
        getVacancyById(card.id);
      }}
    >
      <div className={styles.main}>
        <div className={styles.headerBlock}>
          <h4 className={styles.title} title={card.name}>
            <span>
              {card.name}
            </span>
          </h4>
          <p className={styles.salary}>{card.salaryFormat}</p>
        </div>
        <div className={styles.controlsBlock}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              isHidden ? removeVacancy(card?.id) : addVacancy(card?.id);
            }}
          >
            {isHidden ? (
              <Icon name={"eye"} className={`${styles.eye} ${isMobile && styles.eyeMobile}`} />
            ) : (
              <Icon name={"slashEye"} className={`${styles.eye} ${isMobile && styles.eyeMobile}`} />
            )}
          </button>
        </div>
      </div>
      <div className={styles.additional}>
        <div className={styles.upContent}>
          <span>
            {card.company}
          </span>
          <p>{card.city}</p>
        </div>
        <p className={styles.experience}>
          <Icon name={"star"} className={styles.star} />
          {card.experience}
        </p>
      </div>
    </li>
  );
};

export default VacancyCard;
