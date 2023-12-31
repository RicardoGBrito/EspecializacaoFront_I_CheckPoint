import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCards, getCards, getEpisodes} from "../../redux/services/requests"


/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = () => {


  const {page} = useSelector((store) => store.page)
  const {cards, cardsFilter, episodes} = useSelector((store) => store.getData)
  const {name} = useSelector((store) => store.name)
  const {favoriteCards} = useSelector((store) => store.favorite)
  const dispatch = useDispatch()
  const pages = [1,2,3]

  
  
  useEffect(()=>{
    dispatch(getAllCards(page))
    if(episodes.length<51){

      pages.forEach(item=>dispatch(getEpisodes(item)))    
    }
    

    if(name){
      dispatch(getCards(name))
      
    }
            
  },[page,name,favoriteCards])
  
  
  
  
  return (
    <div className="flex flex-wrap justify-center gap-8 bg-slate-800 my-5 py-10 rounded-3xl">
      
      {
        
        cardsFilter.length>0?(cardsFilter.map((item, index)=>(
                    
          <CardPersonagem key={index} values={item} />
          
        ))):(cards?.map((item, index)=>(
          
          <CardPersonagem key={index} values={item} />
          
        )))
      }

    </div>
  );
};

export default GradePersonagem;
