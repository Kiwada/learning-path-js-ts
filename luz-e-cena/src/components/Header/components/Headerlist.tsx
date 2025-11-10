import React from 'react'
import styles from "Header.module.css";

const Headerlist = ({children,

}:React.LiHTMLAttributes<HTMLElement>) => {
  return (<li className={styles.cabecalho}>{children}</li>
  )
}

export default Headerlist

