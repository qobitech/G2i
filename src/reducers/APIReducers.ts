import * as types from './types'
// types
import { QuestionState , errorProps, actionType } from '../actions/API'

type initialStateType = {
    triviadata : QuestionState[],
    triviaError : errorProps,
    triviaLoading : Boolean
}

const initialState : initialStateType = {
    triviadata : [],
    triviaError : { status : false, errorMessage : "" },
    triviaLoading : false
}

export default( state = initialState, action : actionType ) => {
    switch( action.type ){
        case types.TRIVIA_STATE : 
        return{
            ...state,
            triviadata : action.payload
        };
        case types.TRIVIA_STATE_ERROR : 
        return{
            ...state,
            triviaError : action.payload
        };
        case types.TRIVIA_STATE_LOADING : 
        return{
            ...state,
            triviaLoading : action.payload
        };
        default : return state;
    }
}