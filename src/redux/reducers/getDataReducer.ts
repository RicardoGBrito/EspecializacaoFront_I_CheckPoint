import { Action2 } from "../types"
import {GET_ALL_CARDS, GET_CARDS, GET_LOCATION, GET_EPISODES, CLEAR_FILTER, UPDATE_CARDS} from "../actions-types"




const initialState = {
    allPages:[

    ],
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

            if(copyState.allPages.length<action.payload[1]){
                copyState.allPages.push(action.payload[0].map(element => {
                    return {...element, favorite:false}}))
            }

            return {
                ...copyState, cards:action.payload[0].map(element => {
                    return {...element, favorite:false}
                    
                })
            }
        
        case GET_CARDS:
            
            return{
                ...copyState, cardsFilter:action.payload.map(element => {
                    return {...element, favorite:false}})
            }
        
        case UPDATE_CARDS:
            /* copyState.allPages[action.payload.page-1] = action.payload.cards */
            
            return{
                ...copyState, cards:action.payload.cards
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