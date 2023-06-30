import axios from 'axios';
import {GET_ALL_CARDS, GET_CARDS,  GET_EPISODES} from "../actions-types"
import { cards, episodeCard } from '../types';

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


export function getEpisodesAction(payload:episodeCard){
    console.log(payload)
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


export const getEpisodes = (page:number) => {

    return async (dispatch) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)

        dispatch(getEpisodesAction(response.data.results))
    }

}






