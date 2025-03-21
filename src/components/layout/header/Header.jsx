import React, { useState } from 'react';

import Icon from '../../icon/Icon';
import Button from '../../button/Button';

import styles from './Header.module.css';
import { useResize } from '../../../hooks/useResize';
import { Menu } from './menu/Menu';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const isTablet = useResize(768);
  const isMobile = useResize(767);
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Icon name={'logo'} className={styles.logo} />
        {!isMobile && <Menu />}
        {isTablet && !isMenuOpen && (
          <Button onClick={() => setIsMenuOpen(prevState => !prevState)}>
            <Icon name={'menu'} />
          </Button>
        )}
        {isTablet && isMenuOpen && (
          <Button onClick={() => setIsMenuOpen(prevState => !prevState)}>
            <Icon className={styles.iconClear} name={'clear'} />
          </Button>
        )}
      </div>
    </header >
  );
};

export default Header;
