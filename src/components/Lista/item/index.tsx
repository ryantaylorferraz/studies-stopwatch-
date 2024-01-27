import { ITarefa } from "../../../types/tarefas";
import styles from "../style.module.scss"

interface Props extends ITarefa {

  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export const Item = ({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) => {
  console.log("item atual:", {tarefa, tempo, selecionado, completado, id})

  return (
    <li className={styles.item} onClick={() => selecionaTarefa({
      tarefa,
      tempo,
      selecionado,
      completado,
      id
    })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};
