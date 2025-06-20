import React from 'react';

import styles from './Footer.module.css';

const Footer = ({ className }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      Проект выполнен в рамках стажировки{' '}
      <a target='_blank' href='https://preax.ru'>
        PREAX
      </a>
    </div>
  );
};

export default Footer;
