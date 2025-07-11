import React, { useState, useRef, useEffect } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import styles from './Layout.module.css';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import { Menu } from './header/menu/Menu';
import { useResize } from '../../hooks/useResize';
import { useFocusTrap } from '../../hooks/useFocusTrap';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useResize(768);
  const burgerRef = useRef();

  useFocusTrap(burgerRef, isMenuOpen);

  const showBurgerMenu = isMenuOpen && isMobile;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.noBodyScroll);
    } else {
      document.body.classList.remove(styles.noBodyScroll);
    }

    return () => {
      document.body.classList.remove(styles.noBodyScroll);
    };
  }, [isMenuOpen]);

  return (
    <div  className={styles.bg}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={styles.wrapper}>
        <BurgerMenu ref={burgerRef} className={showBurgerMenu ? styles.wrapperShow : styles.wrapperHidden}>
          <Menu className={styles.menu} />
          <Footer className={styles.footer} />
        </BurgerMenu>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
