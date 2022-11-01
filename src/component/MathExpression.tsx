import React from 'react'
import { useAppSelector } from '../app/hooks';

 interface MathExpressionProps {
   inputRef: React.RefObject<HTMLInputElement>
}

export function MathExpression({ inputRef }: MathExpressionProps) {
  const firstNumber = useAppSelector((state) => state.count.firstNumber)
  const secondNumber = useAppSelector((state) => state.count.secondNumber)
  const result = useAppSelector((state) => state.count.result)
  const operationToggle = useAppSelector((state) => state.count.operationToggle)

  return (
    <div className='outline-2 outline-white outline flex text-center rounded w-6/12 h-40 mx-auto mt-40 mb-10 bg-slate-100'>
        <p className='text-9xl tracking-wider ml-auto leading-tight'>
          { operationToggle 
          ? `${ firstNumber }x${ secondNumber }=`
          : `${ firstNumber * secondNumber }:${ firstNumber }=`}
        </p>
        <input 
          ref={inputRef} 
          value={result}
          type="text" 
          placeholder='...'
          className='text-9xl tracking-wider w-40 h-40 mr-auto bg-slate-100 pointer-events-none'
        />
      </div>
  )
}