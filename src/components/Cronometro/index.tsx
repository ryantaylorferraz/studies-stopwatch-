import { useEffect, useState } from "react"
import { tempoParaSegundos } from "../../common/utils/time"
import { ITarefa } from "../../types/tarefas"
import Botao from "../Botão"
import { Relogio } from "./Relogio"
import styles from "./style.module.scss"

interface Props{
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export const Cronometro = ({selecionado, finalizarTarefa}: Props) => {
  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado]) // [] ==> array de dependencia

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000)
  }
  return (
    <div className={styles.cronometro}>
        <p className={styles.titulo}>Escolha um card e inicie o cronometro</p>
        <div className={styles.relogioWrapper}>
            <Relogio tempo={tempo} />
        </div>
        <Botao onClick={() => regressiva(tempo)}>
            Começar!
        </Botao>
    </div>
  )
}
