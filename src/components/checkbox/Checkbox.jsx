import styles from './Checkbox.module.css';

const Checkbox = ({ list, id = '0', type = 'checkbox' }) => {
  return (
    <>
      {list.map((item, index) => (
        <li
          key={index}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <input
            className={styles.input}
            type={type}
            id={`${type}${id}${index}`}
            name={`${type}${id}`}
          />
          <label htmlFor={`${type}${id}${index}`} className={styles.label}>
            {item}
          </label>
        </li>
      ))}
    </>
  );
};

export default Checkbox;
