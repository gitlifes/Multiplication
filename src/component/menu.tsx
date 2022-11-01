import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setMultiplication, setDevision, setResult } from '../features/count/countSlice'
import { setFirstNumber, setSecondNumber } from '../features/count/countSlice';

function randomInteger() {
  let rand = 0.5 + Math.random() * 10;
  return Math.round(rand);
}

export function Menu() {
  const dispatch = useAppDispatch()

  const resultUpdate = () => {
    dispatch(setResult(''))
    dispatch(setSecondNumber(randomInteger()))
  }

  const multiplication = () => {
    dispatch(setMultiplication())
    resultUpdate()
  }
  
  const division = () => {
    dispatch(setDevision())
    resultUpdate()
  }
 
  return (
    <div className='outline-2 outline-white outline text-center bg-sky-50'>
      <button 
        className="outline-2 outline-white outline w-40 h-10 bg-green-100 hover:text-white hover:bg-green-200"
        onClick={multiplication}
      >
        Multiplication
      </button>

      <button 
        className="outline-2 outline-white outline w-40 h-10 bg-green-100 hover:text-white hover:bg-green-200"
        onClick={division}
      >
        Division
      </button>
    </div>
  )
}      
      