import styles from "./Link.module.css";

const Link = ({children, ...rest}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return ( <a className={styles.link}{...rest}>{children}</a>
  )
}

export default Link
