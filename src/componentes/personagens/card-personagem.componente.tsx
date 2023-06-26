import { useState } from "react";
import BotaoFavorito from "../botoes/botao-favorito.componente";
import { Action, cards } from "../../redux/types";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {  useDispatch } from "react-redux";
import { Dispatch } from "redux";



/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */

const CardPersonagem = (props:cards) => {

  

  const dispatch:Dispatch<Action> = useDispatch()

  const [favorito, setFavorito] = useState<boolean>(false)


  

  function definirEstado(){

    const fav = (!favorito)
    setFavorito(!favorito)

    return fav
  }

  function favoritar(){
    const estado = definirEstado()

    if(estado){
      console.log(estado)
      dispatch({type: "FAVORITE", payload:{cards:{...props.values, favorite:estado}}})
    }else{
      dispatch({type: "CANCEL_FAVORITE", payload:{cards:{...props.values, favorite:estado}}})
    }
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
        
        {/* Deixei o botão para tentar colocar nele a lógica abaixo  */}  
        </div>
        {/* <BotaoFavorito onClick={favoritar} isFavorito={favorito} cards={props.values}/> */}
        {
          (props.values.favorite)?(<StarIcon onClick={()=>dispatch({type: "CANCEL_FAVORITE", payload:{cards:props.values}})} className="text-yellow-400 " style={{fontSize:"50px"}}/>):(favorito? <StarIcon onClick={favoritar} className="text-yellow-400 " style={{fontSize:"50px"}}/>:<StarBorderIcon onClick={favoritar} style={{fontSize:"40px"}}/>)
        }
      </div>
    </div>
  );
};

export default CardPersonagem;
