import styles from "./style.module.scss"

export const Relogio = () => {
  return (
    <>
        <span className={styles.relogioNumero}>0</span>
        <span className={styles.relogioNumero}>0</span>
        <span className={styles.relogioDivisao}>:</span>
        <span className={styles.relogioNumero}>0</span>
        <span className={styles.relogioNumero}>0</span>
    </>
  )
}
