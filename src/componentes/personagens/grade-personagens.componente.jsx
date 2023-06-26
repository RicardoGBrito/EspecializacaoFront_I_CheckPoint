import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCards, getCards} from "../../redux/services/requests"

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
  /* const dados = require('./teste.json'); */

  const {page} = useSelector((store) => store.page)
  const {cards, cardsFilter} = useSelector((store) => store.getData)
  const {name} = useSelector((store) => store.name)
  const dispatch = useDispatch()
  /* const [data, setData] = useState([]) */
  
  
  useEffect(()=>{
    dispatch(getAllCards(page))
    
    if(name){
      dispatch(getCards(name))
      
    }

    /* if(cardsFilter){
      setData(cardsFilter)
    }else{
      setData(cards)
    } */
    
  },[page,name])

  /* console.log(page) */
  console.log(cardsFilter)
  /* console.log(data) */
  return (
    <div className="grade-personagens bg-slate-800 my-5 py-10 rounded-3xl">
      
      {
        
        cards?.map((item, index)=>(
          
          <CardPersonagem key={index} values={item} />
          
        ))
      }

      
      {/* <CardPersonagem />
      <CardPersonagem />
      <CardPersonagem /> */}
    </div>
  );
};

export default GradePersonagem;
