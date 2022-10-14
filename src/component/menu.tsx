import react from 'react'

interface IMenuProps {
  div: () => void
  mul: () => void
}

export function Menu({div, mul}: IMenuProps) {
  return (
    <div className='outline-2 outline-white outline text-center bg-sky-50'>
      <button 
        className="outline-2 outline-white outline w-40 h-10 bg-green-100 hover:text-white hover:bg-green-200"
        onClick={mul}
      >
        Multiplication
      </button>

      <button 
        className="outline-2 outline-white outline w-40 h-10 bg-green-100 hover:text-white hover:bg-green-200"
        onClick={div}
      >
        Division
      </button>
    </div>
  )
}      
      