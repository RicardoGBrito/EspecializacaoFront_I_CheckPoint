import { Action2 } from "../types"
import {GET_ALL_CARDS, GET_CARDS, GET_EPISODES, CLEAR_FILTER, UPDATE_CARDS, GET_CARD} from "../actions-types"




const initialState = {
    
    cards:[

    ],

    card:{

    },
    cardsFilter:[

    ],
    location:{

    },
    episodes:[

    ]
}


export default function getDataReducer(state=initialState, action:Action2){
    
    const copyState = {...state}
    
    
    switch(action.type){

        case GET_ALL_CARDS:


            return {
                ...copyState, cards:action.payload[0].map(element => {
                    return {...element, favorite:false}
                    
                })
            }
        
        case GET_CARD:

            return{
                ...copyState, card:action.payload
            }
        
        case GET_CARDS:
            
            return{
                ...copyState, cardsFilter:action.payload.map(element => {
                    return {...element, favorite:false}})
            }
        
        case UPDATE_CARDS:
            
            return{
                ...copyState, cards:action.payload.cards
            }
        case CLEAR_FILTER:

            return{
                ...copyState, cardsFilter:[]
            }

        
        case GET_EPISODES:
            
            action.payload.forEach(item=>(
                copyState.episodes.push(item)
            ))
                
                
            return{
                ...copyState
            }
        
        default:
            return state

    }

}