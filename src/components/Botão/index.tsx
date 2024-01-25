import style from "./style.module.scss";

type props = {
    children: string;
    type?: "button" | "reset" | "submit" | undefined;

}

const Botao = ({children, type}: props) => {
  return (
  <button className={style.botao} type={type}>
    {children}
    </button>
  );
};

export default Botao;
