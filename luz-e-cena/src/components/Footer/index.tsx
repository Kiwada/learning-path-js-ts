import FooterInfo from "./FooterInfo"
import FooterLogo from "./FooterLogo"   
import styles from "./Footer.module.css"

const Footer = () => {
  return (
  <footer className={styles.rodape}>
    <div className={styles.rodape_informacoes}>             
    <FooterLogo />
    <FooterInfo />
    </div>
  </footer>
  );
};

export default Footer