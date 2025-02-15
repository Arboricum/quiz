import { useState } from "react"
import Quiz from "./Quiz"

export default function QuizSelector() {
  const [quizSelected, setQuizSelected] = useState('')
  const [quizLengthSelected, setQuizLengthSelected] = useState('')
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [error, setError] = useState('')
  const handleSelection = (e) => {
    setQuizSelected(e.target.value)
    setError('')
  }
  const handleClick = () => {
    if (quizSelected && quizLengthSelected) {
      setIsQuizStarted(true)
    } else if (!quizSelected) {
      setError('You must select a quiz')
    } else if (!quizLengthSelected) {
      setError('You must select a length')
    }
  }
  const handleLengthSelection = (e) => {
    setQuizLengthSelected(+e.target.value)
    setError('')
  }
  return (
    <div id='quiz-selector'>
      {(!isQuizStarted) && (
      <>
      <div>
        <h2>Select a quiz</h2>
        <label htmlFor="quizSelector1">JavaScript
        <input 
          type="radio" 
          name="quizSelector" 
          id="quizSelector1" 
          value='js'
          onChange={handleSelection} 
          checked={quizSelected === 'js'}
        />
        </label>
        <label htmlFor="quizSelector2">Css
        <input 
          type="radio" 
          name="quizSelector" 
          id="quizSelector2" 
          value='css'
          onChange={handleSelection}
          checked={quizSelected === 'css'}
        />
        </label>
        <label htmlFor="quizSelector3">Html
        <input 
          type="radio" 
          name="quizSelector" 
          id="quizSelector3" 
          value='html'
          onChange={handleSelection}
          checked={quizSelected === 'html'}
        />
        </label>
      </div>
        
      <div>
      <h2>Select length</h2>
      <label htmlFor="quizLenghtSelector1">Short
        <input 
          type="radio" 
          name="quizLenghtSelector" 
          id="quizLenghtSelector1" 
          value='10'
          onChange={handleLengthSelection} 
          checked={quizLengthSelected === 10}
        />
        </label>
        <label htmlFor="quizLenghtSelector2">Medium
        <input 
          type="radio" 
          name="quizLenghtSelector" 
          id="quizLenghtSelector2" 
          value='25'
          onChange={handleLengthSelection}
          checked={quizLengthSelected === 25}
        />
        </label>
        <label htmlFor="quizLenghtSelector3">Long
        <input 
          type="radio" 
          name="quizLenghtSelector" 
          id="quizLenghtSelector3" 
          value='50'
          onChange={handleLengthSelection}
          checked={quizLengthSelected === 50}
        />
        </label>
      </div>
      <button type="button" onClick={handleClick} id='start-button'>Start</button>
      </>)}
      {error && <p>{error}</p>}
      {(quizSelected && isQuizStarted) && <Quiz quizSelected={quizSelected} quizLengthSelected={quizLengthSelected} />}
    </div>
  )
}
