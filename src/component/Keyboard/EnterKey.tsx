import React from "react";

interface EnterKeyProps {
  enter: () => void
}

export function EnterKey({enter}: EnterKeyProps) {
  return (
    <button 
      className="outline-1 outline-white outline w-40 h-10 bg-green-100 hover:text-white hover:bg-green-200" //border-solid	border-blue-100	border-2
      onClick={() => enter()}
    >
      Enter
    </button>
  )
}