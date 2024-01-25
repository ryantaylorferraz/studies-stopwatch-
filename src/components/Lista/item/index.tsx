import { ITarefa } from "../../../types/tarefas";
import styles from "../style.module.scss"

export const Item = ({tarefa, tempo, selecionado, completado, id}: ITarefa) => {
  console.log("item atual:", {tarefa, tempo, selecionado, completado, id})

  return (
    <li className={styles.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};
