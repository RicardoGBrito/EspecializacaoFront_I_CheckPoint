import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {


  return (
    <div className="w-full bg-slate-700">
      <h3 className="text-4xl font-bold p-5 bg-slate-900 w-full text-center text-slate-50">Catálogo de Personagens</h3>
      <div className="container bg-slate-700">
        <div className="actions">
          
        </div>
        <Filtros />
        <Paginacao />
        <GradePersonagens />
        <Paginacao />
      </div>

    </div>
  );
};

export default PaginaInicio;
