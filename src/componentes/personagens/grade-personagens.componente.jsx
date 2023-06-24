import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { useState } from "react";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = () => {

  /* Usando um conjunto teste para poder organizar a lógica e os cards. */
  const dados = require('./teste.json');
  

  return (
    <div className="grade-personagens bg-slate-800 my-5 py-10 rounded-3xl">
      
      {
        dados.map((item, index)=>(
          
          <CardPersonagem key={index} values={item} /* favorito={favorito} setFavorito={setFavorito} */ />
          
        ))
      }

      
      {/* <CardPersonagem />
      <CardPersonagem />
      <CardPersonagem /> */}
    </div>
  );
};

export default GradePersonagem;
