import React, { useState } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import styles from './Layout.module.css';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import { Menu } from './header/menu/Menu';
import { useResize } from '../../hooks/useResize';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useResize(768);
  return (
    <div className={styles.bg}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={styles.wrapper}>
        {(isMenuOpen && isMobile) ? <BurgerMenu ><Menu className={styles.menu} /></BurgerMenu> : children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
