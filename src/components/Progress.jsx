import {useState, useEffect} from 'react'

export default function Progress({timeout, onTimeout, mode}) {
  const [remainingTime, setRemainingTime] = useState(timeout)
  
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout)
      return () => {
        clearTimeout(timer)
      }
  }, [timeout, onTimeout])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevremainingTime) => prevremainingTime - 100)
    }, 100)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <progress id='question-time' value={remainingTime} max={timeout} className={mode}/>
  )
}

/* mia soluzione

const TIMER = 5000

export default function Progress({onTimeOver, userAnswers}) {
  const [remainingTime, setRemainingTime] = useState(TIMER)
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTimeLeft) => prevTimeLeft - 10)
    }, 10)
    return () => {
      clearInterval(interval)
    }
  }, [])
  useEffect(() => {
    console.log('starting timer', remainingTime)
    const timer = setTimeout(() => {
        onTimeOver()
        setRemainingTime(TIMER)
      }, remainingTime)
    return () => {
      console.log('clearing timer', remainingTime)
      clearTimeout(timer)
      setRemainingTime(TIMER)
    }
  }, [onTimeOver, userAnswers])
  return (
    <progress id='question-time' value={remainingTime} max={TIMER}/>
  )
}
 */
