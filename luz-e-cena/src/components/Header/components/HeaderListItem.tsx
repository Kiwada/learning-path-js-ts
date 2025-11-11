import styles from '../Header.module.css'


const HeaderListItem = ({children,
    
}:React.LiHTMLAttributes<HTMLElement>) => {
  return ( <ul className={styles.menuitem}>{children}</ul>
  )
}

export default HeaderListItem
