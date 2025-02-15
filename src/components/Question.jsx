
import Progress from './Progress'
import Answer from './Answer'
import { useState } from 'react'

export default function Question({
  index,
  onSelectAnswer,
  onSkipAnswer,
  QUESTIONS
}) {
    
    const [answer, setAnswwer] = useState({
      selectedAnswer: '',
      isCorrect: null
    })

    let timer = 10000

    if (answer.selectedAnswer) {
      timer = 1000
    }

    if (answer.isCorrect !== null) {
      timer = 2000
    }

    function handleSelectAnswer(answer) {
      setAnswwer({
        selectedAnswer: answer,
        isCorrect: null
      })

      setTimeout(() => {
        setAnswwer({
          selectedAnswer: answer,
          isCorrect: QUESTIONS[index].answers[0] === answer
        })
        setTimeout(() => {
          onSelectAnswer(answer)
        }, 2000)
      }, 1000)
    }
    let answerState = ''
    if (answer.selectedAnswer && answer.isCorrect !== null) {
      answerState = answer.isCorrect? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
      answerState = 'answered';
    }
  return (
    <div id='question'>
        <Progress 
          key={timer}
          timeout={timer} 
          onTimeout={answer.selectedAnswer === ''? onSkipAnswer: null}
          mode={answerState}
        />
        <h2>{QUESTIONS[index].text}</h2>
        <Answer 
          answers={QUESTIONS[index].answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
  )
}
