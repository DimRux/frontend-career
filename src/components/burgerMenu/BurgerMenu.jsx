import { forwardRef } from "react"
import styles from "./burgerMenu.module.css"

export const BurgerMenu = forwardRef(({ children, className }, ref) => {
  return (
    <div ref={ref} className={`${styles.wrapper} ${className}`}>
      {children}
    </div>
  )
})