import React from "react";

interface NumberKeyProps {
  typing: (num: string) => void
  number: string
}

export function NumberKey({typing, number}: NumberKeyProps) {
  return (
    <button 
          className="outline-2 outline-white outline w-40 h-10 bg-orange-50 hover:text-white hover:bg-orange-200"    //border-solid	border-blue-100	border-2 
          onClick={() => typing(number)}
        >
          {number}
        </button>
  )
}