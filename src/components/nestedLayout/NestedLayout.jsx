import styles from './NestedLayout.module.css';

const NestedLayout = ({ children }) => {
  return <ul className={styles.layout}>{children}</ul>;
};

export default NestedLayout;
