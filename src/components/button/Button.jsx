import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, className, disabled, onClick }) => {
  const buttonClassName = `${styles.baseButton} ${
    disabled ? styles.disabled : ''
  } ${className || ''}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
