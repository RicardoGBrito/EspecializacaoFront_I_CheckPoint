import "./botao-favorito.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {  useDispatch } from "react-redux";
import { Action} from "../../redux/types";
import { Dispatch } from "redux";
import { CANCEL_FAVORITE, FAVORITE } from "../../redux/actions-types";
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorite, card }) => {
  
  const dispatch:Dispatch<Action> = useDispatch()

  
  return (
    <div onClick={()=>!isFavorite(card.name)
      ?dispatch({type: FAVORITE, payload:{cards:card}})
      :dispatch({type: CANCEL_FAVORITE, payload:{cards:card}})}>
      
      {
        isFavorite(card.name)? <StarIcon className="text-yellow-400 " style={{fontSize:"50px"}}/>:<StarBorderIcon style={{fontSize:"40px"}}/>
      }
    </div>
  );
};

export default BotaoFavorito;
