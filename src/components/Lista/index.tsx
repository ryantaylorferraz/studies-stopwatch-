import { ITarefa } from '../../types/tarefas';
import { Item } from './item';
import styles from './style.module.scss'

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


export const Lista = ({tarefas, selecionaTarefa }: {tarefas: Props}) => {


  return (
    <aside className={styles.listaTarefas}>
      <h2 onClick={() => {
        setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]) 
      }}>Estudos do dia</h2>
      <ul className={styles.ulContainer}>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item}/>
        ))}
      </ul>
    </aside>
  );
};
