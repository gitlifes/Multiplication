import React from 'react'

interface MathExpressionProps {
  firstNumber: number
  secondNumber: number
  operationToggle: boolean
  inputRef: React.RefObject<HTMLInputElement>
  result: string
}

export function MathExpression({firstNumber, secondNumber, operationToggle, inputRef, result}: MathExpressionProps) {
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
          // onChange={} 
          type="text" 
          placeholder='...'
          className='text-9xl tracking-wider w-40 h-40 mr-auto bg-slate-100'
        />
      </div>
  )
}