import styles from './ModalLayout.module.css';

const ModalLayout = ({ children, className, classNameContainer }) => {
  return (
    <div className={`${styles.modal} ${classNameContainer}`}>
      <ul className={className}>{children}</ul>
    </div>
  );
};

export default ModalLayout;
