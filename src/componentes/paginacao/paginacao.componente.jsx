import { useDispatch, useSelector } from "react-redux";
import "./paginacao.css";
import { PAGE_DECREMENT, PAGE_INCREMENT } from "../../redux/actions-types";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {

  const dispatch = useDispatch()
  const {page} = useSelector((store)=> store.page)

  return (
    <div className="paginacao">
      <button disabled={page===1} onClick={()=> dispatch({type:PAGE_DECREMENT})} className={"primary"}>
        Anterior
      </button>
      <button disabled={page===42} onClick={()=> dispatch({type:PAGE_INCREMENT})} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
