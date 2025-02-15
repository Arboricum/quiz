import endImage from '../assets/quiz-complete.png';
//import QUESTIONS from '../questions.js';

export default function Summary({userAnswers, QUESTIONS}) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null)
  const correctAnswer = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0])
  const skippedAnswersShare = Math.round((skippedAnswers.length/userAnswers.length*100))
  const correctAnswerShare = Math.round((correctAnswer.length/userAnswers.length*100))
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswerShare
  return (
    <div id='summary'>
      <img src={endImage} alt='end image'/>
      <h2>Quiz is completed!</h2>
      <div id='summary-stats'>
        <p>
          <span className='number'>{skippedAnswersShare}%</span>
          <span className='text'>skipped</span>
        </p>
        <p>
          <span className='number'>{correctAnswerShare}%</span>
          <span className='text'>correctly answered</span>
        </p>
        <p>
          <span className='number'>{wrongAnswersShare}%</span>
          <span className='text'>incorrectly answered</span>
        </p>
      </div>
      <button onClick={() => window.location.reload()} id='reload-button'>Retry</button>
      <h2>Summary</h2>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer'
          if (answer === null) {
            cssClass += ' skipped'
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct'
          } else {
            cssClass += ' wrong'
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className='question'>{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer?? 'Skipped'}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
