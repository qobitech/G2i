import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// url
import { pageurl } from '../pageurl/pageurl'
// Types
import { getTriviaQuestions, TOTAL_QUESTIONS } from '../actions/API'
// style
import { Wrapper } from './Page.style'

import ResultCard from '../components/ResultCard'

const ResultPage = ( { ...props } ) => {

    function handleGameStart(){
        props.getTriviaQuestions()
        props.history.push( pageurl.triviapage )
    }

    const { location } = props
    const { state } = location 
    const { score, userAnswers } = state || 0

    return(
        <Wrapper>
            <div>
                <h1>Trivia Challenge</h1>
            </div>

            <div>
                <h5>You scored&nbsp;{score} / {TOTAL_QUESTIONS}</h5>
            </div>

            <div>
                <button className="start" onClick={ handleGameStart }>
                    Play Again
                </button>
                <button className="start" onClick={ () => props.history.push( pageurl.home ) }>
                    Back to Home
                </button>
            </div>

            <div className="answer_section">
                <p>RESULT</p>
                <div>
                    { Array.isArray( userAnswers ) && userAnswers[0] && userAnswers.map( ( answer, index ) => (
                        <ResultCard answer={ answer } key={ index } index={ index }/>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

const mapDispatchToProps = () => {
    return {
        getTriviaQuestions
    }
}

export default connect( null, mapDispatchToProps( ) ) ( withRouter( ResultPage ) );

