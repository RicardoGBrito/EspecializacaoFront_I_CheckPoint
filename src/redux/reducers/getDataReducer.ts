import { Action2 } from "../types"
import {GET_ALL_CARDS, GET_CARDS, GET_LOCATION, GET_EPISODES, CLEAR_FILTER} from "../actions-types"


const initialState = {
    cards:[

    ],
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
                ...copyState, cards:action.payload
            }
        
        case GET_CARDS:
            
            return{
                ...copyState, cardsFilter:action.payload
            }
        
        case CLEAR_FILTER:

            return{
                ...copyState, cardsFilter:[]
            }

        case GET_LOCATION:
            
            return{
                ...copyState, location: action.payload
            }

        case GET_EPISODES:
            copyState.episodes.push(action.payload.episodes)

            return{
                ...copyState
            }
        
        default:
            return state

    }

}