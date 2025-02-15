
import { useState, useCallback, useRef } from 'react';
//import QUESTIONS from '../questions.js';
import {javascriptQuestions, cssQuestions, htmlQuestions} from '../newQuestions.js'
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz({quizSelected, quizLengthSelected}) {  
  const [userAnswers, setUserAnswers] = useState([]);
  const quizSelectedQuestions = {
    'js': javascriptQuestions,
    'css': cssQuestions,
    'html': htmlQuestions
  }
  const shuffledQuestions = useRef()
  if (!shuffledQuestions.current) {
    shuffledQuestions.current = [...quizSelectedQuestions[quizSelected]]
      .sort(() => Math.random() - 0.5)
      .slice(0, quizLengthSelected);
  }
  const QUESTIONS = shuffledQuestions.current
  
  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsOver) {
    return <Summary userAnswers={userAnswers} QUESTIONS={QUESTIONS} />;
  }
  /*qui usiamo la prop key da passare a Progress: gli passiamo un valore che cambia e questo triggera un rerender, senza peraltro che si debba destrutturare la prop key con child component */
  return (
    <div id='quiz'>
      <Question 
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer= {handleSkipAnswer}
        QUESTIONS={QUESTIONS}
      />
    </div>
  );
}

//mia soluzione
/* 
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  
  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((newAnswer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  }, []);

  //mia soluzione con useCallback
  const handleTimeOver = useCallback(() => {
    if (!quizIsOver) {
      handleSelectAnswer('test');
    }
  }, [quizIsOver, handleSelectAnswer]); 

  if (quizIsOver) {
    return (
      <div id='summary'>
        <img src={endImage} alt='end image'/>
        <h2>Quiz is completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id='quiz'>
      <div id='question'>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswers.map((answer) => (
            <li key={answer} className='answer'>
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
      <Progress onTimeOver={handleTimeOver} userAnswers={userAnswers}/>
    </div>
  );
}
*/