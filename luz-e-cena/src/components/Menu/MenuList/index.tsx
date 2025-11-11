import React from 'react'
import styles from "./MenuList.module.css";

const Menulist = ({children}:React.HtmlHTMLAttributes<HTMLDListElement>) => {
  return (
    <nav>
        <ul className={styles.navegacao}>{children}</ul>
      
    </nav>
  )
}

export default Menulist
