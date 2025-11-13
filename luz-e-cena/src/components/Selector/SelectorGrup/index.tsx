import styles from "./SelectorGrup.module.css";

interface SelectorGrup extends React.SelectHTMLAttributes<HTMLElement> {
    icon?: React.ReactNode;
}

const SelectorGrup= ({ icon , children,  ...rest}: SelectorGrup) => {
  return (
    <div className={styles.container}>
        {icon && <div className={styles.icone}>{icon}</div>}
        <select className={styles.selector}{...rest}> 
            {children}
  </select>     
    </div>
  );
}

export default SelectorGrup;

