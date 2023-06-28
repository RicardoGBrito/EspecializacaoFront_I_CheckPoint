import { Action, cards } from "../../redux/types";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {  useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { CANCEL_FAVORITE, FAVORITE } from "../../redux/actions-types";
import BotaoFavorito from "../botoes/botao-favorito.componente";



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

  /* const dispatch:Dispatch<Action> = useDispatch() */

  
  function isFavorite(name:string){
    return favoriteCards.find(favorite=>favorite.name===name)
  }
  

    
  return (
    <div className="flex rounded-xl w-[500px] min-w-[350px] " >
      <img
      className="w-52 h-52 rounded-l-xl"
        src={props.values.image}
        alt="Rick Sanchez"
      />
      <div className="flex justify-between p-3 w-full bg-slate-900 text-slate-50 rounded-r-xl">

        <div className="flex flex-col justify-evenly items-start" >
          
          <h1 className="text-[27px] font-extrabold">{props.values.name}</h1>
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
        {/* <button onClick={()=>!isFavorite(props.values.name)
                                ?dispatch({type: FAVORITE, payload:{cards:props.values}})
                                :dispatch({type: CANCEL_FAVORITE, payload:{cards:props.values}})}>
          {
            isFavorite(props.values.name)? <StarIcon className="text-yellow-400 " style={{fontSize:"50px"}}/>:<StarBorderIcon style={{fontSize:"40px"}}/>
          }

        </button> */}

      </div>
    </div>
  );
};

export default CardPersonagem;
