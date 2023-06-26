import {Action} from "../types"


const initialState ={
    cards: [
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

        case "FAVORITE":
            copyState.cards.push(action.payload.cards)
            console.log(copyState)
            return {...copyState}
            
        case "CANCEL_FAVORITE":
            
            copyState.cards.splice(copyState.cards.indexOf(action.payload.cards),1)
            return {...copyState}

        case "CLEAR_FAVORITE":
            return{
                ...copyState, cards:[]
            }
        default:
            return state
    }

    
}