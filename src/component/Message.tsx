import React from 'react'

interface MessageProp {
  correctAnswer: boolean
  vrongAnswer: boolean
}

export function Message({correctAnswer, vrongAnswer}: MessageProp) {
  return (
    <div className='absolute top-20 text-center rounded w-6/12 h-30 inset-x-1/4'>
        {correctAnswer && <p className='text-7xl tracking-wider leading-tight bg-green-50 text-green-600'>Vary Good</p>}
        {vrongAnswer && <p className='text-7xl tracking-wider leading-tight bg-red-50 text-red-500'>Vrong Answer</p>}
    </div>
  )
}