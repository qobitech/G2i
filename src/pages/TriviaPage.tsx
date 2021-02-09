import React, {useState, useEffect} from 'react';
//Components
import QuestionCard from '../components/QuestionCard'
// Types
import { QuestionState , errorProps } from '../actions/API'
//Styles
import { Wrapper } from './Page.style'
import { connect } from 'react-redux'
// url
import { pageurl } from '../pageurl/pageurl'
import { withRouter } from 'react-router-dom'
// Types
import { getTriviaQuestions, TOTAL_QUESTIONS } from '../actions/API'


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TriviaPage = ({ ...props }) => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [errMsg, setErrMsg] = useState<errorProps>({status: false, errorMessage: ""});

  useEffect(()=>{
    setLoading( ( ) => props.loading );
    setQuestions( ( ) => props.data );
    setErrMsg( ( ) => props.error );
  },[ props.loading, props.data, props.error ])

  function handleGameStart(){
    props.getTriviaQuestions()
  }

  function quitGame(){
    setScore( 0 );
    props.history.push( pageurl.home )
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
      //Users answer
      const answer = e.currentTarget.value;
      //Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //Add score if answer is correct
      if (correct) setScore(prev => prev + 1);
      //Save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject] );
      if (number === TOTAL_QUESTIONS -1) {
        setGameOver(true);
      }
  }

  const checkResult = () => {
    props.history.push( { 
      pathname : pageurl.scorepage, 
      state : { 
        score,
        userAnswers
      },
    } ) 
  }

  const nextQuestion = () => {
    //Move on to the next question if not the last question
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    }else{
      setNumber(nextQuestion);
    }
  }

  console.log(number + 1, 'juju');

  return (
    <>
    {/* <GlobalStyle /> */}
    <Wrapper>
      <h1>Trivia Challenge</h1>
      {!loading &&
        <div className="quitbuttondiv">
          <p onClick={ quitGame }>
            Quit Game
          </p>
        </div>}
      {loading && <p>Loading Questions ...</p>}
      {!loading && (
        <>
          { ( !errMsg.status && Array.isArray( questions ) && questions[0] ) ?
          (<QuestionCard 
            category={questions[number].category}
            questionNr={number+1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />)
          :
          <div className="errordiv">
          <p>{errMsg.errorMessage}</p>
          <p>Unsteady Internet Connection...Please check internet & &nbsp;
              <span onClick={ handleGameStart } className="refresh">Refresh Page</span></p>
          </div>
          }
        </>
      )}
      {!gameOver && !loading && !errMsg.status && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
      {gameOver && 
        <button className="next" onClick={checkResult}>
          Check Result
        </button>}

    </Wrapper>
    </>
  );
}

type triviaProp = ({ trivia: { triviadata : QuestionState; triviaLoading : boolean; triviaError : errorProps; }; })

const mapStateToProps = ( state: triviaProp ) => ({
  data : state.trivia.triviadata,
  loading : state.trivia.triviaLoading,
  error : state.trivia.triviaError
})

const mapDispatchToProps = () => {
  return {
      getTriviaQuestions
  }
}

export default connect( mapStateToProps, mapDispatchToProps() )( withRouter( TriviaPage ) );
