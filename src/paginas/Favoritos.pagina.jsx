import GradePersonagensFavoritos from "../componentes/personagens/grade-personagens-favoritos";


/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <GradePersonagensFavoritos/>
      {/* <Paginacao/> */}
    </div>
  );
};

export default PaginaFavoritos;
