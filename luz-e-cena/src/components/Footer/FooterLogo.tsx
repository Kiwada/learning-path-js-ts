import Logo from "../Logo/Index";
import styles from "./Footer.module.css";

const FooterLogo = () => {
  return (
    <div className={styles.logo}>
      <Logo src="./logo_branco.png" alt="Logo" />
      <p>Onde a realidade encontra a fantasia!</p>
    </div>
  );
};

export default FooterLogo;