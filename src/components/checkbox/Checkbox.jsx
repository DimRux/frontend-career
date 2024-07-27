import styles from "./Checkbox.module.css";

const Checkbox = ({ list = [], onChange, isChecked }) => {
  return (
    <>
      {list.map((item) => (
        <li
          key={`${item.type}-${item.name}-${item.text}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <input
            className={styles.input}
            type={item.type}
            id={`${item.type}-${item.name}-${item.text}`}
            name={item.name}
            onChange={() => onChange(item.name, item.value)}
            checked={isChecked(item.name, item.value)}
          />
          <label
            htmlFor={`${item.type}-${item.name}-${item.text}`}
            className={styles.label}
          >
            {item.text}
          </label>
        </li>
      ))}
    </>
  );
};

export default Checkbox;
