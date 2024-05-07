import styles from './ModalLayout.module.css';

const ModalLayout = ({ children, className }) => {
  return (
    <div className={styles.modal}>
      <ul className={className}>{children}</ul>
    </div>
  );
};

export default ModalLayout;
