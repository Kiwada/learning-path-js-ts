import styles from  '../Header.module.css'

const HeaderList = ({children,

}:React.LiHTMLAttributes<HTMLElement>) => {
  return (<li className={styles.cabecalho}>{children}</li>
  )
}

export default HeaderList

