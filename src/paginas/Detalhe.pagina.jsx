import "./Detalhe.css";
import BotaoFavorito from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
/**
 * Esta é a página de detalhes. Aqui você pode mostrar a visão do personagem selecionado junto com a lista de episódios em que ele aparece
 *
 * TRABALHAR NESTE ARQUIVO É OPCIONAL E NÃO É NECESSÁRIO PARA APROVAÇÃO
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalhe /> ```
 *
 * @returns Página de detalhe
 */

const PaginaDetalhe = () => {
  const {card, episodes} = useSelector((store)=>store.getData)
  const {favoriteCards} = useSelector((store)=>store.favorite)
  const [episodios, setEpisodios] = useState([])
  

  function isFavorite(name:string){
    return favoriteCards.find(favorite=>favorite.name===name)
  }
  
  useEffect(()=>{
    setEpisodios((episodes.map((episodio)=>((card.episode.includes(episodio.url))?episodio:""))).filter(item=>item!==""))
  },[])
  
  return (
    <div className="flex w-full h-screen justify-center bg-slate-700 relative">

      <div className=" flex flex-col bg-slate-700 items-center rounded-xl">
        
        <h4 className="text-4xl font-bold p-5 bg-slate-900 w-full absolute text-center text-slate-50">Detalhes</h4>
        <div className="bg-slate-900 m-10 p-10 rounded-xl w-[900px] absolute top-[100px]">
          <div className="flex bg-slate-900 rounded-xl w-full justify-evenly items-start">
            <img
              className="w-[300px] h-[300px] rounded-2xl"
              src={card?.image}
              alt={card?.name}
            />
            
            <div className={"detalhe-header-texto"}>
              <p>{card?.name}</p>
              <p>Origem: <span className="text-zinc-500">{(card?.origin.name=== "unknown")?"Desconhecida":card.origin.name}</span></p>
              <p>Genero: <span className="text-zinc-500">{card?.gender}</span></p>
            </div>
            <BotaoFavorito isFavorite={isFavorite} card={card} />
          </div>
        </div>
        <h4 className="text-3xl p-5 bg-slate-900 w-full text-center absolute top-[550px] text-slate-50">Lista de episódios em que o personagem apareceu</h4>
        <div className="flex flex-wrap gap-4 p-10 bg-slate-800 justify-center absolute top-[626px]">
          
          {
            
            episodios?.map((item, index)=>(
              <CardEpisodio key={index} values={item}/>
            ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default PaginaDetalhe;
