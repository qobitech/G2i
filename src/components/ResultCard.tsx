import React from 'react'
import { DetailedHTMLProps } from 'react'
import { AnswerObject } from '../pages/TriviaPage'
import { ResultWrapper, Wrapper } from './QuestionCard.style'

type Props = {
    answer : AnswerObject,
    index : number
}

const ResultCard: React.FC<Props> = ({ 
    answer,
    index
 }) => {

    const [openTray, setOpenTray] = React.useState(false)

    function handleTray(){
        setOpenTray( !openTray )
    }

    const questionDivRef= React.useRef<HTMLDivElement>(null);

    // const divHeight = questionDivRef.current?.clientHeight;

    return(
        <ResultWrapper openTray={ openTray } correct={ answer.correct } >
            <div className="questionsection" onClick={ handleTray } >
                
                <div className="textDiv">
                    <p>{index+1}.</p>
                    <h4 dangerouslySetInnerHTML={{__html: answer.question}} />                
                </div>
                <div className="iconDiv">
                    <i className={`${openTray ? "fas fa-minus" : "fas fa-plus"}`} />
                </div>
                
            </div>
            <div className="answerSection">
                <p>Your Answer :&nbsp;<span className="answerTxt">{answer.answer}</span></p>
                <i className={`${answer.correct ? "fas fa-check answerTxt" : "fas fa-times answerTxt" }`} />
            </div>
        </ResultWrapper> 
    )
}

export default ResultCard;