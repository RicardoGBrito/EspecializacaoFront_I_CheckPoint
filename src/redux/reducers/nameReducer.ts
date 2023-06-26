import { CLEAR_FILTER_NAME, FILTER_NAME } from "../actions-types"
import { Action4 } from "../types"

const initialState ={
    name:""
}

export default function nameReducer(state=initialState, action: Action4){
    const copyState = {...state}

    switch(action.type){
        case FILTER_NAME:
            return{
                ...copyState, name:action.payload
            }
        case CLEAR_FILTER_NAME:
            return{
                ...copyState, name:""
            }
        default:
            return state
    }
}