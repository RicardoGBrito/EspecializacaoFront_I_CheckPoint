import { useSelector } from "react-redux"
import { cards } from "../../redux/reducers/types"
import CardPersonagem from "./card-personagem.componente"
import "./grade-personagem.css";

export default function GradePersonagensFavoritos(){

    const {cards} = useSelector((state)=>state.favorite)

    console.log(cards)
    return(
        <div className="grade-personagens bg-slate-800 my-5 py-10 rounded-3xl">
            {
                cards.map((item,index)=>(
                    <CardPersonagem key={index} values={item}/>
                ))
            }
        </div>
    )
}