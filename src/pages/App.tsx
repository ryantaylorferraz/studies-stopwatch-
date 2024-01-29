import { useState } from "react";
import { Cronometro } from "../components/Cronometro";
import { Formulario } from "../components/Formulario";
import { Lista } from "../components/Lista";
import styles from './style.module.scss'
import { ITarefa } from "../types/tarefas";



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()
  
  const selecionaTarefa = (tarefaSelecionado: ITarefa) => {
    setSelecionado(tarefaSelecionado)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionado.id ? true : false,

    })))
  }

  const finalizarTarefa = () => {
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
         return {
          ...tarefa,
          selecionado: false,
          completado: true
         }
        } return tarefa;
      }))
    }
  }

  return (
  <div className={styles.AppStyle}>
    <Formulario setTarefas={setTarefas}/>
    <Lista selecionaTarefa={selecionaTarefa} tarefas={tarefas} />
    <Cronometro 
    finalizarTarefa={finalizarTarefa} selecionado={selecionado} />
  </div>
  );
}

export default App;
