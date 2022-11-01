import {useState, useRef} from 'react';
import { Menu } from './component/Menu';
import { Keyboard } from './component/Keyboard/Keyboard'
import { Message } from './component/Message'
import { MathExpression } from './component/MathExpression'
import { setMultiplication, setDevision, setResult } from './features/count/countSlice'
import { setFirstNumber, setSecondNumber } from './features/count/countSlice';
import { useAppDispatch, useAppSelector } from './app/hooks'


function App() {

  const dispatch = useAppDispatch()
  const operationToggle = useAppSelector((state) => state.count.operationToggle)
  const firstNumber = useAppSelector((state) => state.count.firstNumber)
  const secondNumber = useAppSelector((state) => state.count.secondNumber)
  const result = useAppSelector((state) => state.count.result)
  
  const [correctAnswer, setCorrectAnswer] = useState(false)                      
  const [vrongAnswer, setWrongAnswer] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  function typing(number: string) {
    if (result.length <= 1) {
      if(result !== '0') {
        dispatch(setResult(result + number))
      } else {
        dispatch(setResult(number))
      }
    }
 
    if (null !== inputRef.current){
      inputRef.current.value = result
    }
  }

  function backspace() {
    dispatch(setResult(result.slice(0, result.length-1)))
  }

  function randomInteger() {
    let rand = 0.5 + Math.random() * 10;
    return Math.round(rand);
  }

  function answerWrong() {
    setWrongAnswer(true)
    setTimeout(() => setWrongAnswer(false), 1000)
    dispatch(setResult(''))
  }

  function answerCorrect() {
    setCorrectAnswer(true)
    setTimeout(() => setCorrectAnswer(false), 1000)
    dispatch(setSecondNumber(randomInteger()))
    dispatch(setFirstNumber(randomInteger()))
    dispatch(setResult(''))
  }

  function enter() {
    if ( operationToggle ) {
      if ( secondNumber <= 10 ) {
        if( String(firstNumber*secondNumber) === result) {
          answerCorrect()
        } else {
          answerWrong()
        }
      }
    } else {
      if ( secondNumber <= 10 ) {
        if( String(secondNumber) === result) {
          answerCorrect()
        } else {
          answerWrong()
        }
      }
    }
  }
 
  return (
    <>
      <Menu/>
      <Message correctAnswer={correctAnswer} vrongAnswer={vrongAnswer} /> 
      <MathExpression
        inputRef={inputRef}
      />
      <Keyboard typing={typing} backspace={backspace} enter={enter}/>
    </>
  );
}

export default App;
