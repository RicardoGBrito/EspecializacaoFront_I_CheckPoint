import { PAGE_DECREMENT, PAGE_INCREMENT } from "../actions-types"
import { Action3 } from "../types"

const initialState = {
    page:1
}

export default function pageReducer(state=initialState, action:Action3){

    const copyState = {...state}

    switch(action.type){

        case PAGE_INCREMENT:
            
            return{
                ...copyState, page:copyState.page+1
            }
        case PAGE_DECREMENT:
            return{
                ...copyState, page:copyState.page-1
            }
        default:
            return state
    }


}