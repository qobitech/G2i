
import { shuffleArray } from '../utils'
import * as types from '../reducers/types'

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] }

export type errorProps =  {
    status : boolean,
    errorMessage : string
}

export type actionType = {
    type : types.triviaType,
    payload : QuestionState | errorProps | boolean
}

const triviaData = ( data : QuestionState ) : actionType => ({
    type :  types.TRIVIA_STATE,
    payload : data
})

const triviaDataError = ( data : errorProps ) : actionType => ({
    type :  types.TRIVIA_STATE_ERROR,
    payload : data
})

const triviaDataLoading = ( data : boolean ) : actionType => ({
    type :  types.TRIVIA_STATE_LOADING,
    payload : data
})

export const TOTAL_QUESTIONS = 10

export const fetchQuizQuestions = async ( amount: number, difficulty: Difficulty ) : Promise<QuestionState> => {

        const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`;
        const data = await (await fetch(endpoint)).json();
        return data.results.map((question: Question) => (
            {
                ...question,
                answers: shuffleArray([
                    ...question.incorrect_answers, 
                    question.correct_answer
                ])
            }
        ))
    }

type dispatchProp = ( arg : { type : string; payload : string | boolean | QuestionState | void | errorProps } ) => void

export const getTriviaQuestions = () => async ( dispatch : dispatchProp ) => {
    dispatch( triviaDataLoading( true ) )
    dispatch( triviaDataError( { status : false, errorMessage : "" } ) )
    fetchQuizQuestions( TOTAL_QUESTIONS, Difficulty.HARD )
    .then(( resp ) => {
        dispatch( triviaDataLoading( false ) )
        dispatch( triviaData( resp ) )
        dispatch( triviaDataError( { status : false, errorMessage : "" } ) )
    }).catch( async err => {
        dispatch( triviaDataLoading( false ) )
        dispatch( triviaDataError( { status : true, errorMessage : err.message } ) )
    })
}