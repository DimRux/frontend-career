import styles from './VacancyList.module.css';

const SkeletonVacancyList = ({length = 18, title = true}) => {
  return (
    <div className={styles.skeleton}>
      {title && <div className={styles['skeleton-title']}></div>}
      <ul className={styles['skeleton-list']}>
        {
          Array.from({length:length}).map((_, index) =>
            <li key={index} className={styles['skeleton-item']}>
              <div className={styles['skeleton-header']}></div>
              <div className={styles['skeleton-body']}></div>
              <div className={styles['skeleton-footer']}></div>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default SkeletonVacancyList;