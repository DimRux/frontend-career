import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, className, disabled }) => {
  const buttonClassName = `${styles.baseButton} ${
    disabled ? styles.disabled : ''
  } ${className || ''}`;

  return <button className={buttonClassName}>{children}</button>;
};

export default Button;
