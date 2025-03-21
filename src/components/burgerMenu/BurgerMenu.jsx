import styles from "./burgerMenu.module.css"

export const BurgerMenu = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}