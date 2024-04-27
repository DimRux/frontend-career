import React from 'react';
import styles from './FilterItem.module.css';
import Icon from '../../icon/Icon';

const FilterItem = ({ children, iconName, needChevron }) => {
  return (
    // какой инпут пока не известно
    <li className={styles.wrapper}>
      <div className={styles.title}>
        <Icon name={iconName} />
        <span>{children}</span>
      </div>
      {needChevron && <Icon name={'chevron'} />}
    </li>
  );
};

export default FilterItem;
