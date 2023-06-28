import axios from 'axios';
import {GET_ALL_CARDS, GET_CARDS, GET_LOCATION, GET_EPISODES} from "../actions-types"
import { cards, episodeCard, locationCard } from '../types';

export function getAllCardsAction(payload:Array<cards>, page:Number){
    return{
        type: GET_ALL_CARDS,
        payload: [payload,page]
    }
}

export function getCardsAction(payload:cards){
    return{
        type: GET_CARDS,
        payload: payload
    }
}

export function getLocationAction(payload:locationCard){
    return{
        type: GET_LOCATION,
        payload: payload
    }
}

export function getEpisodesAction(payload:episodeCard){
    return{
        type: GET_EPISODES,
        payload: payload
    }
}



export const getAllCards = (page:Number) => {
    return async (dispatch) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        
        
        dispatch(getAllCardsAction(response.data.results,page))
    }

}

export const getCards = (name:String) => {
    
    
    return async (dispatch) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
        

        dispatch(getCardsAction(response.data.results))
    }

}

export const getLocation = (name:String) => {

    return async (dispatch) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/location/?name=${name}`)

        dispatch(getLocationAction(response.data.results))
    }

}

export const getEpisodes = (url:String) => {

    return async (dispatch) => {
        const response = await axios.get(`${url}`)

        dispatch(getEpisodesAction(response.data.results))
    }

}






