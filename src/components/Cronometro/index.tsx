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
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado]) // [] ==> array de dependencia

  const startCounter = () => {
    setRunning(true);
  }
  const stopCounter = () => {
    setRunning(false);
  }

  const resetCounter = () => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
    setRunning(false)
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if(running) {
      if(tempo) {
        intervalId = setInterval(() => {
          setTempo((prevCounter) => prevCounter && prevCounter > 0 ? prevCounter - 1 : prevCounter);
        }, 1000);
      } else {
        finalizarTarefa()
      } 
    }

    return () => clearInterval(intervalId);
  }, [running, tempo, finalizarTarefa])


  return (
    <div className={styles.cronometro}>
        <p className={styles.titulo}>Escolha um card e inicie o cronometro</p>
        <div className={styles.relogioWrapper}>
            <Relogio tempo={tempo} />
        </div>

        <div className={styles.containerButton}>
          <Botao onClick={startCounter}>
              Começar!
          </Botao>
          <Botao onClick={stopCounter}>
              Parar!
          </Botao>
          <Botao onClick={resetCounter}>
              Reiniciar!
          </Botao>
        </div>
    </div>
  )
}
