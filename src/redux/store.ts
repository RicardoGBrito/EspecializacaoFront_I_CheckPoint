import { legacy_createStore, applyMiddleware } from "redux"
import {combineReducers} from "@reduxjs/toolkit"
import {favoriteReducer} from "../redux/reducers/favoriteReducer"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux"
import getDataReducer from "./reducers/getDataReducer"
import pageReducer from "./reducers/pageReducer"
import nameReducer from "./reducers/nameReducer"




const reducers = combineReducers({
    favorite: favoriteReducer,
    getData: getDataReducer,
    page: pageReducer,
    name: nameReducer
})

export type RootState = ReturnType<typeof reducers>

/* {
    favorite:{
        favoritesCards: cards
    }
} */



export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export const store = legacy_createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))