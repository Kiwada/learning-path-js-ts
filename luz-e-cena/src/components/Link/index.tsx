import styles from "./Link.module.css";

const Link = ({children}) => {
  return ( <a className={styles.link}>{children}</a>
  )
}

export default Link
