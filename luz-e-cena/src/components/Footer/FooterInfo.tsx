import styles from "./Footer.module.css"


const FooterInfo = () => {
  return (
    <div className={styles.funcionamento}>
       <h4 className={styles.titulo}>Funcionamento</h4>
       <span>Segunda à Sexta: 10:00 - 18:00</span>
       <span>Sábado e Domingo: 10:00 - 16:00</span>
       <span>Feriados: 10:00 - 16:00</span>
    </div>
  )
}

export default FooterInfo