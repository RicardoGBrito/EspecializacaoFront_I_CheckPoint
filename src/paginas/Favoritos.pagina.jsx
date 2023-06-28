
import { useDispatch } from "react-redux";
import GradePersonagensFavoritos from "../componentes/personagens/grade-personagens-favoritos";
import { type } from "@testing-library/user-event/dist/type";
import { CLEAR_FAVORITE } from "../redux/actions-types";


/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {

  const dispatch = useDispatch()
  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger" onClick={()=>dispatch({type:CLEAR_FAVORITE})}>Limpar Favoritos</button>
      </div>
      <GradePersonagensFavoritos/>
    </div>
  );
};

export default PaginaFavoritos;
