import Button from "../../../button/Button"
import styles from "./menu.module.css"

export const Menu = ({ className }) => {
  return (
    <nav className={`${styles.controls} ${className}`}>
      <Button className={styles.navButton}>{'Поиск вакансий'}</Button>
      <Button className={styles.navButton} disabled={true}>
        {'Избранные вакансии'}
      </Button>
    </nav>
  )
}