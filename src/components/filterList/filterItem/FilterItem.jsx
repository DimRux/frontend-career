import React, { forwardRef } from "react";
import styles from "./FilterItem.module.css";
import Icon from "../../icon/Icon";
import Button from "../../button/Button";

const FilterItem = forwardRef((props, ref) => {
  const {
    iconName,
    type = "dropdown",
    text,
    value,
    onChange,
    isOpenFilter,
    onClick,
    level,
    children,
    className,
    count,
    ...otherProps
  } = props;

  return (
    <>
      <li
        ref={ref}
        className={`${styles.wrapper} ${className}`}
        onClick={onClick}
        data-level={level}
        {...otherProps}
      >
        <div
          className={styles.title}
          data-active={isOpenFilter ? "true" : "false"}
        >
          <Icon name={iconName} className={styles.icon} />
          {type === "input" ? (
            <input
              className={styles.input}
              type="text"
              placeholder={text}
              value={value}
              onChange={onChange}
              data-active={value ? "true" : "false"}
            />
          ) : (
            <span className={styles.input}>{text}</span>
          )}
          {count > 0 && !value && (
            <div className={styles.countBadge}>{count}</div>
          )}
          {type === "dropdown" && (
            <Icon
              name="chevron"
              className={`${styles.chevron} ${
                isOpenFilter ? styles.active : ""
              }`}
            />
          )}
          {type === "input" && value && (
            <Button onClick={() => onChange({ target: { value: "" } })}>
              <Icon name="clear" className={styles.iconClear} />
            </Button>
          )}
        </div>
        {isOpenFilter && children}
      </li>
    </>
  );
});

export default FilterItem;
