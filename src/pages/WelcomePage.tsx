import React from 'react'
// router
import { withRouter } from 'react-router-dom'
// url
import { pageurl } from '../pageurl/pageurl'
// Style
import { Wrapper } from './Page.style'
import { connect } from 'react-redux'
// Types
import { getTriviaQuestions } from '../actions/API'

const WelcomePage = ( { ...props } ) => {

    function handleGameStart(){
        props.getTriviaQuestions()
        props.history.push( pageurl.triviapage )
    }

    return(
        <Wrapper>
            <div className="divclass">
                <h1>Welcome to the <br/>Trivia Challenge</h1>
            </div>

            <div className="divclass">
                <h3 className="subtitle">You will be presented with 10 True or False questions.</h3>
            </div>

            <div className="divclass">
                <h5>Can you score 100%?</h5>
            </div>

            <div>
                <button className="start" onClick={ handleGameStart }>
                    Begin
                </button>
            </div>
        </Wrapper>
    )
}

const mapDispatchToProps = () => {
    return {
        getTriviaQuestions
    }
}

export default connect( null, mapDispatchToProps( ) ) ( withRouter( WelcomePage ) );