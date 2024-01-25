import Botao from "../Botão"
import { Relogio } from "./Relogio"
import styles from "./style.module.scss"

export const Cronometro = () => {
  return (
    <div className={styles.cronometro}>
        <p className={styles.titulo}>Escolha um card e inicie o cronometro</p>
        <div className={styles.relogioWrapper}>
            <Relogio />
        </div>
        <Botao>
            Começar!
        </Botao>
    </div>
  )
}
