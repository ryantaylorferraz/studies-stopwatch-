import { ITarefa } from '../../types/tarefas';
import { Item } from './item';
import styles from './style.module.scss'



export const Lista = ({tarefas, }: {tarefas: ITarefa[]}) => {


  return (
    <aside className={styles.listaTarefas}>
      <h2 onClick={() => {
        setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]) 
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item}/>
        ))}
      </ul>
    </aside>
  );
};
