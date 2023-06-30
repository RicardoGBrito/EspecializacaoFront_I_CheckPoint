import { useSelector } from "react-redux"
import CardPersonagem from "./card-personagem.componente"
import "./grade-personagem.css";

export default function GradePersonagensFavoritos(){

    const {favoriteCards} = useSelector((state)=>state.favorite)

    
    return(
        <div className="grade-personagens bg-slate-800 my-5 py-10 rounded-3xl">
            {
                favoriteCards.map((item,index)=>(
                    <CardPersonagem key={index} values={item}/>
                ))
            }
        </div>
    )
}