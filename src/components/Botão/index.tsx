import style from "./style.module.scss";

type props = {
    children?: React.ReactNode;
    type?: "button" | "reset" | "submit" | undefined;
    onClick?: () => void

}

const Botao = ({children, type, onClick}: props) => {
  return (
  <button className={style.botao} type={type} onClick={onClick}>
    {children}
    </button>
  );
};

export default Botao;
