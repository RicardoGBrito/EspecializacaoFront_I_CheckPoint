
import { useDispatch } from "react-redux";
import GradePersonagensFavoritos from "../componentes/personagens/grade-personagens-favoritos";
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
    <div className="w-full bg-slate-700 h-screen">
      <h3 className="text-4xl font-bold p-5 bg-slate-900 w-full text-center text-slate-50">Personagens Favoritos</h3>
      <div className="container">
        <div className="actions">
          <button className="danger" onClick={()=>dispatch({type:CLEAR_FAVORITE})}>Limpar Favoritos</button>
        </div>
        <GradePersonagensFavoritos/>
      </div>

    </div>
  );
};

export default PaginaFavoritos;
