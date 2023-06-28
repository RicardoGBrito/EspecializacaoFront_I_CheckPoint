import { CANCEL_FAVORITE, CLEAR_FAVORITE, FAVORITE } from "../actions-types"
import {Action} from "../types"


const initialState ={
    favoriteCards: [
        /* {
            id:null,
            name:"",
            status:"",
            species:"",
            type:"",
            gender:"",
            origin:{
                name:"",
                url:"",
            },
            location:{
                name:"",
                url:"",
            },
            image:"",
            episode:[],
            url:"",
            created:"",
            
        } */
    ],
    
    
}

export const favoriteReducer = (state=initialState, action:Action ) =>{

    const copyState = {...state}

    switch(action.type){

        case FAVORITE:
            const findCard =  copyState.favoriteCards.find(favorite=>favorite.name === action.payload.cards.name)
            
            if(!findCard){
                return {
                    ...copyState, favoriteCards:[...copyState.favoriteCards, action.payload.cards]
                }
            }

            break
        case CANCEL_FAVORITE:
            const cardsFiltrados = copyState.favoriteCards.filter(favorite=>favorite.name!==action.payload.cards.name)

            return{
                ...copyState, favoriteCards:cardsFiltrados
            }


        case CLEAR_FAVORITE:
            return{
                ...copyState, favoriteCards:[]
            }
        default:
            return state
    }

    
}