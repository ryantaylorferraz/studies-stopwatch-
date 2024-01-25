import { useState } from "react";
import { Cronometro } from "../components/Cronometro";
import { Formulario } from "../components/Formulario";
import { Lista } from "../components/Lista";
import styles from './style.module.scss'
import { ITarefa } from "../types/tarefas";



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  console.log(tarefas)

  return (
  <div className={styles.AppStyle}>
    <Formulario setTarefas={setTarefas}/>
    <Lista tarefas={tarefas} />
    <Cronometro />
  </div>
  );
}

export default App;
