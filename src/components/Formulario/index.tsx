import { useState } from 'react'
import Botao from '../Botão'
import styles from './style.module.scss'
import { ITarefa } from '../../types/tarefas';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export const Formulario = ({setTarefas}: Props) => {
    const [tarefa, setTarefa] = useState("React");
    const [tempo, setTempo] = useState("00:00:02")

    const adicionarTarefa = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setTarefas(tarefasAntigas => [...tarefasAntigas, {
            tarefa, tempo, selecionado: false, completado: false, id: crypto.randomUUID()
        }])
        setTarefa("")
        setTempo("")
    }

  return (
    <div className={styles.divContainer}>
        <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor='tarefa'>
                    Adicione um novo estudo
                </label>
                <input type="text" name='tarefa' id='tarefa'
                value={tarefa}
                onChange={e => setTarefa(e.target.value)}
                placeholder='O que você quer estudar?' required />

            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time" step="1" name="tempo" 
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
                id='tempo' min="00:00:00" max="01:30:00" required/>

            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    </div>
  )
}
