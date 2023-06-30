import { cards } from "../../redux/types";
import {  useDispatch, useSelector } from "react-redux";
import {  GET_CARD } from "../../redux/actions-types";
import BotaoFavorito from "../botoes/botao-favorito.componente";
import { Link } from "react-router-dom";



/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */

const CardPersonagem = (props:cards) => {

  const {favoriteCards} = useSelector(store=>store.favorite)

  const dispatch = useDispatch()
  
  function isFavorite(name:string){
    return favoriteCards.find(favorite=>favorite.name===name)
  }
  

    
  return (
    <div className="flex rounded-xl w-[500px] min-w-[350px] " >
      
      <img
      className="w-52 h-52 rounded-l-xl"
        src={props.values.image}
        alt={props.values.name}
      />
      
      
      <div className="flex justify-between p-3 w-full bg-slate-900 text-slate-50 rounded-r-xl">

        <div className="flex flex-col justify-evenly items-start" >
          <Link to={"detalhe"} onClick={()=> {dispatch({type:GET_CARD, payload:props.values})}}>
            <h1 className="text-[27px] font-extrabold hover:text-[29px] hover:text-slate-300">{props.values.name}</h1>
          </Link>
          <div className="flex justify-center items-center relative bottom-3">
            <div className={(props.values.status==='Alive')?"bg-green-500 rounded-full w-[10px] h-[10px]":"bg-red-500 rounded-full w-[10px] h-[10px]"}></div>
            <p className="text-sm pl-2 ">{props.values.status} - {props.values.species}</p>
          </div>
          
          <div>
            <h3 className="text-zinc-500 text-base">Última localização conhecida:</h3>
            <p className="text-zinc-300 text-lg">{(props.values.location.name === "unknown")?"Desconhecida":props.values.location.name}</p>
          </div>
        

        </div>

        <BotaoFavorito isFavorite={isFavorite} card={props.values} />
        

      </div>
    </div>
  );
};

export default CardPersonagem;
