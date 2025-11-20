import Logo from "../Logo/Index"
import styles from "./Footer.module.css"

const FooterLogo = () => {
  return (
    <div className={styles.logo}>
        <Logo src="logo_branco.png" alt="Logo" />
        <p className={styles.titulo}>a Realidade Encontra a Fantasia !</p>
    </div>
  )
}

export default FooterLogo