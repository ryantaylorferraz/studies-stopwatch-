import { ITarefa } from "../../../types/tarefas";
import styles from "./style.module.scss"
import { CiCircleCheck } from "react-icons/ci";



interface Props extends ITarefa {

  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export const Item = ({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) => {


  return (
    <li className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''} ${completado ? styles.itemCompletado : ''}`} onClick={() => !completado && selecionaTarefa({
      tarefa,
      tempo,
      selecionado,
      completado,
      id
    })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={styles.concluido} aria-label="tarefa completada"><CiCircleCheck />
</span>}
    </li>
  );
};
