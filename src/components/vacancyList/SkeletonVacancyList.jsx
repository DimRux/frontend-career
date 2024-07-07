import styles from './VacancyList.module.css';

const skeletons = [];

for (let i = 0; i < 18; i++) {
  skeletons.push('');
}

const SkeletonVacancyList = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles['skeleton-title']}></div>
      <ul className={styles['skeleton-list']}>
        {
          skeletons.map((_, index) =>
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