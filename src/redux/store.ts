import { legacy_createStore } from "redux"
import {combineReducers} from "@reduxjs/toolkit"
import {favoriteReducer} from "../redux/reducers/favoriteReducer"
import { cards } from "./reducers/types"
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux"




const reducers = combineReducers({
    favorite: favoriteReducer
})

export type RootState = ReturnType<typeof reducers>

/* {
    favorite:{
        favoritesCards: cards
    }
} */



export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export const store = legacy_createStore(reducers)