import {useState, useRef} from 'react';
import { Menu } from './component/menu';
import { Keyboard } from './component/Keyboard/Keyboard'
import { Message } from './component/Message'
import { MathExpression } from './component/MathExpression'

function App() {
  
  const [operationToggle, setOperationToggle] = useState(true)
  const [firstNumber, setFirstNumber] = useState(randomInteger())
  const [secondNumber, setSecondNumber] = useState(randomInteger())
  const [result, setResult] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState(false)                      
  const [vrongAnswer, setWrongAnswer] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const multiplication = () => {
    setOperationToggle(true)
    setResult('')
    setSecondNumber(1)
  }

  const division = () => {
    setOperationToggle(false)
    setResult('')
    setSecondNumber(1)
  }

  function typing(number: string) {
    if (result.length <= 1) {
      if(result !== '0') {
        setResult(prev => (prev + number))
      } else {
        setResult(number)
      }
    }
    console.log(inputRef.current)
    if (null !== inputRef.current){
      inputRef.current.value = result
    }
  }

  function backspace() {
    setResult(prev => prev.slice(0, prev.length-1))
  }

  function randomInteger() {
    let rand = 0.5 + Math.random() * 10;
    return Math.round(rand);
  }

  function answerWrong() {
    setWrongAnswer(true)
    setTimeout(() => setWrongAnswer(false), 1000)
    setResult('')
  }

  function answerCorrect() {
    setCorrectAnswer(true)
    setTimeout(() => setCorrectAnswer(false), 1000)
    setSecondNumber(randomInteger())
    setFirstNumber(randomInteger())
    setResult('')
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
      <Menu div={division} mul={multiplication}/>
      <Message correctAnswer={correctAnswer} vrongAnswer={vrongAnswer} /> 
      <MathExpression
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        operationToggle={operationToggle}
        inputRef={inputRef}
        result={result}
      />
      <Keyboard typing={typing} backspace={backspace} enter={enter}/>
    </>
  );
}

export default App;
