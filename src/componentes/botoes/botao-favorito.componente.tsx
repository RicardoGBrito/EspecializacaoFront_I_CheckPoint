import "./botao-favorito.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {  useDispatch } from "react-redux";
import { Action} from "../../redux/reducers/types";
import { Dispatch } from "redux";
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorito, onClick, cards }) => {
  
  const dispatch:Dispatch<Action> = useDispatch()

  /* if(isFavorito){
    console.log(isFavorito)
    dispatch({type: "FAVORITE", payload:{cards:cards}})
  }else{
    dispatch({type: "CANCEL_FAVORITE", payload:{cards:cards}})
    
  } */

  return (
    <div onClick={onClick}
      /* dispatch={isFavorito?dispatch({type: "FAVORITE", payload:{cards:cards, favorite:isFavorito}}):dispatch({type: "CANCEL_FAVORITE", payload:{cards:cards, favorite:isFavorito}})} */ 
      className="">
      
      {isFavorito ? <StarIcon dispatch={dispatch({type: "FAVORITE", payload:{cards:cards}})} className="text-yellow-400 " style={{fontSize:"50px"}} /> : <StarBorderIcon dispatch={()=>dispatch({type: "CANCEL_FAVORITE", payload:{cards:cards}})} style={{fontSize:"40px"}}/>}
    </div>
  );
};

export default BotaoFavorito;
